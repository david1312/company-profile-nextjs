import axios from "axios";
import * as cheerio from "cheerio";
import { NextResponse } from "next/server";
import { mockHashrate } from "@/public/mocks/scrap-hashrate";
import { mockDifficulty } from "@/public/mocks/scrap-difficulty";
import { mockBTCIDR } from "@/public/mocks/scrap-btcidr";

export async function GET(request: Request) {
  const useMockData = process.env.USE_MOCK_DATA === "true";

  try {
    let data1, data2, data3;

    if (true) {
      // Use mock data
      data1 = mockHashrate;
      data2 = mockDifficulty;
      data3 = mockBTCIDR;
      console.log("as");
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
      console.log(data1);
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

    console.log("asubai");
    console.log(hashRate);
    console.log(btcDifficulty);
    console.log(btcIDR);
    // console.log("Site 2 Data:", someDataFromSite2);
    // console.log("Site 3 Data:", someDataFromSite3);

    // Return the extracted data
    return NextResponse.json({
      hashRate,
      raw: data1,
      //   someDataFromSite2,
      //   someDataFromSite3,
    });
  } catch (error) {
    console.error("Error scraping data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
