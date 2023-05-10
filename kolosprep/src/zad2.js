const { hogwardArray } = require("./potter.js");

const resultArray = hogwardArray.reduce((acc, curr) => {
  const currentType = curr.hogwartsStudent
    ? "student"
    : curr.hogwartsStaff
    ? "staff"
    : "none";
  if (curr.house === "") {
    if ("noHouse" in acc) {
      if (currentType in acc["noHouse"]) {
        const newTypeArray = [...acc["noHouse"][currentType], curr.name];
        acc["noHouse"][currentType] = newTypeArray;
      } else {
        acc["noHouse"][currentType] = [curr.name];
      }
    } else {
      acc["noHouse"] = {};
      acc["noHouse"][currentType] = [curr.name];
    }
  } else if (curr.house in acc) {
    if (currentType in acc[curr.house]) {
      const newTypeArray = [...acc[curr.house][currentType], curr.name];
      acc[curr.house][currentType] = newTypeArray;
    } else {
      acc[curr.house][currentType] = [curr.name];
    }
  } else {
    acc[curr.house] = {};
    acc[curr.house][currentType] = [curr.name];
  }
  return acc;
}, {});

console.dir(resultArray, { depth: null });
