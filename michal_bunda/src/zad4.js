const zliczPoKolei = (funTab, threshold, cb) => {
    let amountOfFnsOverT = 0;
    const resultCounter = (funTab, x) => {
        if (x > threshold) {
            amountOfFnsOverT++;
        }
        if (funTab.length > 0) {
            funTab.shift()(funTab, resultCounter);
        } else {
            cb(amountOfFnsOverT);
        }
    };
    funTab.shift()(funTab, resultCounter);
};

const f1 = (funTab, cb) => {
    setTimeout(() => {
        console.log("Wywołanie f1"); // w celu sprawdzenia czy funkcje wykonuja sie po sobie
        cb(funTab, 3);
        return 3;
    }, 1000);
};

const f2 = (funTab, cb) => {
    setTimeout(() => {
        console.log("Wywołanie f2");
        cb(funTab, 4);
        return 4;
    }, 200);
};

const f3 = (funTab, cb) => {
    setTimeout(() => {
        console.log("Wywołanie f3");
        cb(funTab, 5);
        return 5;
    }, 500);
};

const f4 = (funTab, cb) => {
    setTimeout(() => {
        console.log("Wywołanie f4");
        cb(funTab, 6);
        return 6;
    }, 400);
};

const f5 = (funTab, cb) => {
    setTimeout(() => {
        console.log("Wywołanie f5");
        cb(funTab, 7);
        return 7;
    }, 400);
};

const c1 = (res) => {
    console.log("Ilość funkcji ponad threshold:", res);
};

zliczPoKolei([f1, f2, f3, f4, f5], 4, c1); // 3