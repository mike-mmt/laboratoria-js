const razem = (promisesTab, callback) => {
    // const resultsFor = [];
    // for (let i = 0; i < promisesTab.length; i++) {
    //     const element = promisesTab[i];
    //     element.then(res => {
    //         resultsFor.push(res)
    //     })
    // }
    // callback(resultsFor)
    // const results = promisesTab.reduce((acc, val) => {
    //     return 
    // })
    proms = promisesTab.map(x => x())

    const tab = [];

    proms.forEach((el) => {
        el.then((res) => {
            tab.push(res);
            if (tab.length === arr.length) {
                cb();
            }
        })
    })
}

const prom1 = new Promise((resolve, reject) => {
    resolve(6)
})
const prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(7)
    }, 500);
})
const prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(8)
    }, 2000);
})
const prom4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(9)
    }, 1000);
})

const fn1 = () => {
    return new Promise((resolve, reject) => {
        resolve(4)
    })
}
const fn2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(6)
        }, 500);
    })
}
const fn3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(7)
        }, 2000);
    })
}
const fn4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(8)
        }, 1000);
    })
}

const cb = (res) => console.log(res);

razem([prom1, prom2, prom3, prom4], cb)