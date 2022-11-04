export const getMinSquaredNumber = (arr) => {
  if (typeof arr != "object" || arr.length == 0) {
    return null;
  }
  let squared = arr.map((num) => num * num);
  return Math.min(...squared);
};
