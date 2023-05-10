const { hogwardArray } = require('./potter.js');

const resultArray = hogwardArray.reduce((acc, curr) => {
    if (curr.alive) {
        const currentType = curr.hogwartsStudent ? "student" : curr.hogwartsStaff ? "staff" : "none";
        if (curr.house === "") {
            if ("noHouse" in acc) {
                acc["noHouse"] = [...acc["noHouse"], { name: curr.name, type: currentType}];
            } else {
                acc["noHouse"] = [{ name: curr.name, type: currentType}];
            }
        } else if (curr.house in acc) {
            acc[curr.house] = [...acc[curr.house], { name: curr.name, type: currentType}];
        } else {
            acc[curr.house] = [{ name: curr.name, type: currentType}];
        }
    }
    return acc;
}, {});

console.dir(resultArray, { depth: null });