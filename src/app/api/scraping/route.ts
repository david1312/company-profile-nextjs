import axios from "axios";
import * as cheerio from "cheerio";
import { NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import { mockHashrate } from "@/public/mocks/scrap-hashrate";
import { mockDifficulty } from "@/public/mocks/scrap-difficulty";
import { mockBTCIDR } from "@/public/mocks/scrap-btcidr";
import { formatNumber } from "@/src/utils/common";
import { ScrapingResponse, ErrorResponse } from "@/src/interfaces/apiResponses";

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
      // URLs to fetch data from
      const url1 = "https://www.coinwarz.com/mining/bitcoin/hashrate-chart";
      const url2 = "https://www.coinwarz.com/mining/bitcoin/difficulty-chart";
      const url3 = "https://www.tokocrypto.com/id/trade/BTC_IDR";

      // Fetch all data concurrently
      const [response1, response2, response3] = await Promise.all([
        axios.get(url1),
        axios.get(url2),
        axios.get(url3),
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

    // Extract the information you need from each document
    const hashRate = $1('meta[property="og:title"]').attr("content");
    const btcDifficulty = $2("strong")
      .filter(function () {
        return $2(this).text().trim().startsWith("BTC Difficulty:");
      })
      .text();
    const btcIDR = $3("title").text().trim();

    // Directly return the response with NextResponse.json
    return NextResponse.json({
      hashRate: formatNumber(hashRate || ""),
      btcDifficulty: formatNumber(btcDifficulty),
      btcIdr: formatNumber(btcIDR),
      time: new Date().toISOString().split("T")[0],
    } as ScrapingResponse);
  } catch (error) {
    console.error("Error scraping data:", error);

    // Directly return the error response with NextResponse.json
    return NextResponse.json(
      { error: "Failed to fetch data" } as ErrorResponse,
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
