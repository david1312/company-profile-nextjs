import { BTCPriceResponse, ErrorResponse } from "@/src/types/apiResponses";
import { NextResponse } from "next/server";
// import mockBtcPrice from "@/public/mocks/api/btc-timeframe-price.json";
import { StatusCodes } from "http-status-codes";
import axios from "axios";
import {
  BTC_IDR_INDEX,
  COIN_API_CONFIG,
  COIN_API_URL,
} from "@/src/utils/configApi";
import { getDateMinusDays } from "@/src/utils/utils";

export async function GET(
  request: Request
): Promise<NextResponse<BTCPriceResponse | ErrorResponse>> {
  // Convert the mock data into the BTCPriceResponse format
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit");
    console.log({ limit });
    const url = `${process.env.API_URL}${COIN_API_URL.BTC_PRICES_TIMEFRAME}`;

    const currentDate = new Date().toISOString().split("T")[0];
    const timeEnd = getDateMinusDays(Number(limit || "1"));

    console.log({ url, currentDate, timeEnd });

    const { data } = await axios.get(
      url.replace(":id_indexes", BTC_IDR_INDEX),
      {
        headers: {
          "X-CoinAPI-Key": process.env.API_KEY || "", // Assuming it's a Bearer token, modify if necessary
        },
        params: {
          period_id: COIN_API_CONFIG.period,
          time_start: `${timeEnd}T00:00:00Z`,
          time_end: `${currentDate}T23:59:59Z`,
        },
      }
    );
    // const response: BTCPriceResponse = {
    //   data: mockBtcPrice.map((item: any) => ({
    //     time_period_start: item.time_period_start,
    //     time_period_end: item.time_period_end,
    //     time_open: item.time_open,
    //     time_close: item.time_close,
    //     value_open: Number(item.value_open),
    //     value_high: Number(item.value_high),
    //     value_low: Number(item.value_low),
    //     value_close: Number(item.value_close),
    //     value_count: Number(item.value_count),
    //   })),
    // };

    return NextResponse.json(
      { data: data, date: currentDate },
      {
        status: 200,
        statusText: "OK",
      }
    );
  } catch (error) {
    console.error("Error fetch btc price:", error);

    // Directly return the error response with NextResponse.json
    return NextResponse.json({
      error: "Failed to fetch data",
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    } as ErrorResponse);
  }
}
