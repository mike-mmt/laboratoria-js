function numberSplit(number) {
    return number%2 == 0 ? [number/2, number/2] : [Math.floor(number/2), Math.floor(number/2) + 1]
}
console.log(numberSplit(4));
console.log(numberSplit(11));
console.log(numberSplit(-9));
 // => [2, 2]
 // => [5, 6]
 // => [-5, -4]