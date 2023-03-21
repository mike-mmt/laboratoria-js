'use strict';

function getCounter(min, max){
    return function(){
        if (min <= max) return min++
    }
}

const count = getCounter(3,9);
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());