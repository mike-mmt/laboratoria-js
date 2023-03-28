const arr = [ { x: 4, y: 2}, { x: 1, y: 8 }, { x: 4, y: 2 } ];

function calculateAverage(array, calculatedVar) {
    return array.reduce((acc, value) => {
        return acc + value[calculatedVar];
    }, 0) / array.length;
}

console.log(calculateAverage(arr, 'x'));