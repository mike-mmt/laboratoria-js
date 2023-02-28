'use strict';

const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];
const unique = [];

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    let duplicate = false;
    if (!(element in unique)) {
        unique[unique.length] = element;
    }
    // for (let i2 = 0; i2 < unique.length; i2++) {
    //     const element2 = unique[i2];
    //     if (element === element2) {
    //         duplicate = true;
    //     }
    // }
    // if (!duplicate) {
    //     unique[unique.length] = element;
    // }
}
console.log(unique);