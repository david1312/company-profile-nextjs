export interface ScrapingResponse {
  hashRate: string;
  btcDifficulty: string;
  btcIdr: string;
  time: string;
  idrUsdRate: number;
  blockHeightCurrent: string;
  btcDifficultyNextEst: string;
  btcDifficultyNextEstRate: string;
  btcDifficultyNextEstInfo: string;
  btcBlockTimeAvg: string;
}

export interface ErrorResponse {
  error: string;
  status: number;
}

export interface BTCPrice {
  time_period_start: string;
  time_period_end: string;
  time_open: string;
  time_close: string;
  value_open: number;
  value_high: number;
  value_low: number;
  value_close: number;
  value_count: number;
}

export interface BTCPriceResponse {
  data: BTCPrice[];
  date: string;
}
