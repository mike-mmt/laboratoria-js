function multiplyAsync(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x !== "number" || typeof y !== "number") {
            reject("Niepoprawne dane");
        } else {
            resolve(x * y);
        }
    });
}

multiplyAsync(3, "y")
    .then((wynik) => console.log(wynik))
    .catch(() => console.log("Niepoprawne dane"));

multiplyAsync(3, 5)
    .then((wynik) => console.log(wynik))
    .catch((error) => console.log(error));