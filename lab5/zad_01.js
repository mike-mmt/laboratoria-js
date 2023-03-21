'use strict';
// Zsumuj wszystkie elementy w tablicy.
const arr = [1, 3, -5, 7]

const suma = arr.reduce((accumulator, value) => accumulator + value, 0)

console.log(suma);