let czasSukces = "1";

const checkTime = (arg, maxTries) => { // arg: seconds
    return new Promise((resolve, reject) => {
        const time = new Date().getTime() + arg * 1000;
        const check = new Promise((resolve, reject) => {
            let triesLeft = maxTries;
            const interval = setInterval(() => {
                if (new Date().getTime() > time) {
                    const date = new Date();
                    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
                    clearInterval(interval);
                    resolve(time);
                } else if (triesLeft <= 0){
                    console.log("Limit prób przekroczony");
                    clearInterval(interval);
                    reject("Limit prób przekroczony");
                } else {
                    console.log("Sprawdzam ponownie");
                    triesLeft--;
                }
            }, 1000);
        })
        .then((result) => {
            console.log("Czas upłynął");
            czasSukces = result;
            resolve("crazy");
        }).catch((err) => {
            resolve(checkTime(arg-2, maxTries));
        });
    });
};

const w = checkTime(9, 5);

w.then(result => {
        console.log(`!!! - ${result}`);
        console.log(czasSukces); // Wywołanie musi być zawarte poza funkcją checkTime
    });
