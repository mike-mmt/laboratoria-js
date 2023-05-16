const newPromise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Udało się!");
    }, 5000);
});

newPromise1.then((returnValue) => {
    console.log(returnValue);
});