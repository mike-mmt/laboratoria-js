const poKolei = (funTab, cb) => (n) => {
    const currentFunction = funTab.shift()
    currentFunction(n).then(res => {
        if (funTab.length === 0) {
            cb(res);
        } else {
            poKolei(funTab, cb)(res)
        }
    })
};

const poKolei2 = (funTab, cb) => (n) => {
    let result;
    const helper = (promise, index) => (x) => {
        if (index === funTab.length - 1) {
            promise(x).then(res => cb(res))
        } else {
            promise(x).then(res => helper(funTab[index+1], index+1)(res));
        }
    }
    helper(funTab[0], 0)(n);
};

const f1 = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n+1)
        }, 1000);
    });
}
const f2 = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n*2)
        }, 500);
    });
}
const f3 = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n+3)
        }, 1500);
    });
}
const c1 = (res) => {
    console.log(res);
}

poKolei2([f1,f2,f3], c1)(2)