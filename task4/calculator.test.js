import { calc } from "./calculator";

it("should sum numbers", () => {
  const result = calc("1 + 2");
  expect(result).toEqual("1 + 2 = 3");
});

it("should expression is true", () => {
  const result = calc("3 - 2");
  expect(result).toEqual("3 - 2 = 1");
});

it("should expression is true", () => {
  const result = calc("2 * 2");
  expect(result).toEqual("2 * 2 = 4");
});

it("should expression is true", () => {
  const result = calc("4 / 2");
  expect(result).toEqual("4 / 2 = 2");
});

it("should no string is null", () => {
  const result = calc(8);
  expect(result).toEqual(null);
});