import { reverseArray } from ".";

it("should number null", () => {
  const result = reverseArray(8);
  expect(result).toEqual(null);
});

it("should string null", () => {
  const result = reverseArray('text');
  expect(result).toEqual(null);
});

it("should array reverse", () => {
  const result = reverseArray([1, 2, 3, 4]);
  expect(result).toEqual([4, 3, 2, 1]);
});