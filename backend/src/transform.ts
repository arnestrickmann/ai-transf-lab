export interface RateRecord { ccy: string; rate: number; }

export function normalizeCurrencyData(records: RateRecord[]) {
  return records.map(r => ({
    currency: r.ccy,
    // BUG: rounds to 2 decimals instead of 3
    normalizedRate: Math.round(r.rate * 100) / 100
  }));
}
