function multiplyAsync(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x !== "number" || typeof y !== "number") {
            reject("parameter is not a number")
        } else {
            resolve(x * y)
        }
    });
}

multiplyAsync(5, 7).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

multiplyAsync("sześć", 8).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
