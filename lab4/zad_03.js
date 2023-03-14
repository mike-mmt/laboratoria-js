'use strict';

function returnOtherFunction() {
    let n = 5;
    return input => n + input;
}

const xasd = returnOtherFunction()
// xasd = input => 5 + input

console.log(xasd(2));
console.log(returnOtherFunction()(9));