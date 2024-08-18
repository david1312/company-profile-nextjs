// src/types/apiResponses.ts

export interface ScrapingResponse {
  hashRate: string;
  btcDifficulty: string;
  btcIdr: string;
  time: string;
}

export interface ErrorResponse {
  error: string;
}
