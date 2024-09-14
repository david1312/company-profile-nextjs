import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BTCPriceResponse, ScrapingResponse } from "@/src/types/apiResponses";

interface BTCState {
  data: ScrapingResponse;
  prices: BTCPriceResponse;
}

const initialState: BTCState = {
  data: {
    btcDifficulty: "86.87",
    btcIdr: "935,967,272.00",
    hashRate: "643.38",
    time: "",
    idrUsdRate: 1,
    blockHeightCurrent: "",
    btcBlockTimeAvg: "",
    btcDifficultyNextEst: "",
    btcDifficultyNextEstInfo: "",
    btcDifficultyNextEstRate: "",
  },
  prices: {
    date: "",
    data: [],
  },
};

const btcSlice = createSlice({
  name: "btc",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<ScrapingResponse>) {
      state.data = action.payload;
    },
    setPrice(state, action: PayloadAction<BTCPriceResponse>) {
      state.prices = action.payload;
    },
  },
});

export const { setData, setPrice } = btcSlice.actions;

export default btcSlice.reducer;
