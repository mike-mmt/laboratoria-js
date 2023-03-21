'use strict';
// Operując na tablicy liczb, stwórz nową tablicę liczb,
// w której wszystkie ujemne liczby zostają podniesione do kwadratu. 
// [ -5, 4, -2, 4, -5 ] => [ 25, 4, 4, 4, 25 ]
arr = [ -5, 4, -2, 4, -5 ]

const arr2 = arr.reduce((acc, value) => {
    if (value < 0) {
        const squared = value**2
        return [...acc, squared]
    }
    return [...acc, value];
}, []);

console.log(arr2);