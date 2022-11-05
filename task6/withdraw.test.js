import { withdraw } from ".";

it("should balans less 0", () => {
  const result = withdraw(["Ann", "John", "User"], [0, 87, -6], "Ann", 50);
  expect(result).toEqual(-1);
});

it("should balans enough", () => {
  const result = withdraw(["Ann", "John", "User"], [0, 87, -6], "John", 50);
  expect(result).toEqual(37);
});

it("should balans not enough", () => {
  const result = withdraw(["Ann", "John", "User"], [0, 87, -6], "John", 100);
  expect(result).toEqual(-1);
});
