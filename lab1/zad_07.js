const arr3 = [1, 5, 6, 5, 5, 1, 5];
for (let i = 0; i < arr3.length; i++) {
    const element = arr3[i];
    let count = 0;
    for (let j = 0; j < arr3.length; j++) {
        const element2 = arr3[j];
        if (element2 === element) {
            count++;
        }
    }
    if (count > 1) {
        console.log(element, "występuje", count, "razy");
    } else {
        console.log(element, "występuje", count, "raz");
    }
}