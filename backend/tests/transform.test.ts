import { normalizeCurrencyData } from "../src/transform";

test("should round to 3 decimals", () => {
  const data = [{ ccy: "USD", rate: 1.23456 }];
  const result = normalizeCurrencyData(data);
  expect(result[0].normalizedRate).toBeCloseTo(1.235, 3);
});
