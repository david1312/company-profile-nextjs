// src/types/apiResponses.ts

export interface HeaderDataResponse {
  hashRate: string;
  btcDifficulty: string;
  btcIdr: string;
  time: string;
}

export interface ErrorResponse {
  error: string;
}
