const testArray = [1, 2, null, [4, undefined, 11, 10], 6, [7, null, 0], null, 9]; 
const temp = [];
for (let i = 0; i < testArray.length; i++) {
    const element = testArray[i];
    if (typeof element === "object" && element?.length) {
        for (let j = 0; j < element.length; j++) {
            const element2 = element[j];
            temp.push(element2);
        }
    } else {
        temp.push(element);
    }
}

console.log(temp);