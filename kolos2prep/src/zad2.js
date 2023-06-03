const razemTab = (funTab, cb) => {
    const results = [];
    const resultChecker = (result) => {
        results.push(result);
        if (results.length === funTab.length) {
            cb(results);
        }
    }

    funTab.forEach(fn => {
        fn(resultChecker)
    });

}

const fn1 = (checkerFunction) => {
    setTimeout(() => {
        checkerFunction(7)
    }, 1000);
}

const fn2 = (checkerFunction) => {
    setTimeout(() => {
        checkerFunction(8)
    }, 2000);
}

const fn3 = (checkerFunction) => {
    setTimeout(() => {
        checkerFunction(9)
    }, 500);
}

razemTab([fn1,fn2, fn3], (results) => console.log(results));