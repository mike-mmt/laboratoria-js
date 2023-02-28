const array = [ 4, 2, 'a', 'b', 3, 'aa', 'ww', 2, 'ab', -2];
const numsTemp = [];
const otherTemp = [];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (typeof element === "number") {
        numsTemp[numsTemp.length] = element;
        // numsTemp.push(element);
    } else {
        otherTemp[otherTemp.length] = element;
        // otherTemp.push(element);
    }
}

for (let i = 0; i < numsTemp.length; i++) {
    const element = numsTemp[i];
    array[i] = element;    
}
for (let i = 0; i < otherTemp.length; i++) {
    const element = otherTemp[i];
    array[i+numsTemp.length] = element;
}

console.log(array);