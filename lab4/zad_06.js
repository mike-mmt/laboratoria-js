'use strict';

function sum(input) {
    if (input === 1) {
        return 1
    } else {
        return sum(input-1) + input
    }
}

console.log(sum(4));