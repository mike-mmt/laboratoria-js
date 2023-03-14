'use strict';

const arr = [10, 'a', 21, true, null, undefined, 1, false, 'b', 2];

const isNone = element => element == null;
const isString = element => typeof element == 'string';
const isTrue = element => element == true;
const isNum = element => typeof element == 'number';

console.log(arr.some(isNone));

console.log(arr.find(isString));

console.log(arr.findIndex(isTrue));

console.log(arr.filter(isNum).sort());