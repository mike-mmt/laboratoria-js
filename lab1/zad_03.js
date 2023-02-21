'use strict';
const arr = [2,8,-4.0,7,-15,9]
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let max = arr[0];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    } 
}
console.log("Max wartosc:",max);
console.log("Min wartosc:",min);

arr.reverse();

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}