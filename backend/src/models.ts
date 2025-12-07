export interface FxRate {
  // mismatch: db uses iso_code / rate; here we use camelCase
  currencyCode: string;
  rateValue: number;
  updatedAt: string;
}
