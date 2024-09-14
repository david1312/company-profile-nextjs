import axios, { HttpStatusCode } from "axios";
import * as cheerio from "cheerio";
import { NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import { mockHashrate } from "@/public/mocks/scrap-hashrate";
import { mockDifficulty } from "@/public/mocks/scrap-difficulty";
import { mockBTCIDR } from "@/public/mocks/scrap-btcidr";
import { formatNumber } from "@/src/utils/utils";
import { ScrapingResponse, ErrorResponse } from "@/src/types/apiResponses";
import { SCRAPPING_URL } from "@/src/utils/configApi";

export async function GET(
  request: Request
): Promise<NextResponse<ScrapingResponse | ErrorResponse>> {
  const useMockData = process.env.MOCK_MODE === "true";

  try {
    let data1, data2, data3;

    if (useMockData) {
      // Use mock data
      console.log("using mock data");
      data1 = mockHashrate;
      data2 = mockDifficulty;
      data3 = mockBTCIDR;
    } else {
      // Fetch all data concurrently
      const [response1, response2, response3] = await Promise.all([
        axios.get(SCRAPPING_URL.HASH_RATES),
        axios.get(SCRAPPING_URL.DIFFICULTY_RATE),
        axios.get(SCRAPPING_URL.BTC_PRICE),
      ]);

      data1 = response1.data;
      data2 = response2.data;
      data3 = response3.data;

      console.log("Fetched data from actual URLs");
    }

    // Load the HTML into Cheerio for each response
    const $1 = cheerio.load(data1);
    const $2 = cheerio.load(data2);
    const $3 = cheerio.load(data3);

    //additional data
    const blockHeightText = $2("small")
      .filter((i, el) => $2(el).text().includes("Bitcoin Block Height:"))
      .text();

    const targetDiv = $2(
      "strong.stat-title:contains('Bitcoin Next Difficulty Estimate')"
    ).next("div[style*='text-align:center;']");

    // Extract the spans inside the target div
    const nextDifficultyEst = targetDiv.find("span").first().text(); // First span value
    const nextDifficultyEstRate = targetDiv.find("span").eq(1).text(); // Second span value
    const nextDifficultyEstInfo = targetDiv.find("span").eq(3).text(); // Third span value

    // Find the <strong> element with the text 'Bitcoin Block Time Average'
    const targetDivAvg = $2(
      "strong.stat-title:contains('Bitcoin Block Time Average')"
    ).next("div"); // Get the next sibling <div>

    // Get the first <span> inside the <div>
    const blockTimeAvg = targetDivAvg.find("span").first().text();

    //get currency price
    const appDataScript = $3("#__APP_DATA").html();
    let idrToUsd = 0;
    // Ensure the script content exists
    if (appDataScript) {
      const appData = JSON.parse(appDataScript);
      const products = appData.appProps.product;
      const usdtToIdr = products["USDTIDR"];
      if (usdtToIdr) {
        idrToUsd = parseFloat(usdtToIdr?.close) || 0;
      }
    } else {
      console.error("Failed to extract app data script.");
    }

    // Extract the information you need from each document
    const hashRate = $1('meta[property="og:title"]').attr("content");
    const btcDifficulty = $2("strong")
      .filter(function () {
        return $2(this).text().trim().startsWith("BTC Difficulty:");
      })
      .text();
    const btcIDR = $3("title").text().trim();

    // Directly return the response with NextResponse.json
    return NextResponse.json(
      {
        hashRate: formatNumber(hashRate || ""),
        btcDifficulty: formatNumber(btcDifficulty),
        btcIdr: formatNumber(btcIDR),
        time: new Date().toISOString().split("T")[0],
        idrUsdRate: idrToUsd,
        blockHeightCurrent: blockHeightText
          .split("Bitcoin Block Height:")[1]
          .trim(),
        btcBlockTimeAvg: blockTimeAvg,
        btcDifficultyNextEst: nextDifficultyEst,
        btcDifficultyNextEstInfo: nextDifficultyEstInfo,
        btcDifficultyNextEstRate: nextDifficultyEstRate,
      } as ScrapingResponse,
      {
        status: HttpStatusCode.Ok,
      }
    );
  } catch (error) {
    console.error("Error scraping data:", error);

    // Directly return the error response with NextResponse.json
    return NextResponse.json({
      error: "Failed to fetch data",
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    } as ErrorResponse);
  }
}
