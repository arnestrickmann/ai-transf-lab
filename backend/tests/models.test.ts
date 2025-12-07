import { FxRate } from "../src/models";

test("model fields should align with db schema", () => {
  const keys = Object.keys({} as FxRate);
  expect(keys).toContain("currencyCode");
  // intentional mismatch warning for AI fix
});
