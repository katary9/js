import { getMinSquaredNumber } from "./get.MinSquaredNumber";

it("should array empty is null", () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it("should string is null", () => {
  const result = getMinSquaredNumber('text');
  expect(result).toEqual(null);
});

it("should square of the min number", () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});