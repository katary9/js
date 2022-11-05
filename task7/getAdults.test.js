import { getAdults } from "./getAdults";

it("should person 18 age", () => {
  const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({"John Doe": 19, Bob: 18 });
});

it("should object empty", () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it("should person all 16 age", () => {
  const result = getAdults({ "John Doe": 16, Tom: 16, Bob: 16 });
  expect(result).toEqual({});
});