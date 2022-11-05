export const getAdults = (obj) => {
  let newObj = {};
  for (let i in obj) {
    let team = obj[i];
    if (team >= 18) {
      newObj[i] = team;
    }
  }
  return newObj;
};

