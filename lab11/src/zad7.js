const failPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("hihi");
    }, 3000);
});

// failPromise.then(() => {}, () => console.log("Porażka"));

failPromise.catch(() => console.log("Porażka"));