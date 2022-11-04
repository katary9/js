export const reverseArray = (arr) => {
  if (typeof arr !== "object") {
    return null;
  }
  return arr.reverse();
};
