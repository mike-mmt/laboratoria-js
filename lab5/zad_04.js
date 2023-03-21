'use strict';
// Napisz funkcję, który będzie na wejściu przyjmowała tablicę liczb,
// a zwracała tablicę stringów składających się z indeksów elementów oraz wartości jakie pod nimi występują. 
// 
// Output:  
// [ '0: 1', '1: 3', '2: 6', '3: 2', '4: 9' ]

const arr = [ 1, 3, 6, 2, 9 ]

console.log(arr.reduce( (acc, val, index) => {
    return [...acc, `${index}: ${val}`]
}, []));