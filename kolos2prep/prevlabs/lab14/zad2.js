const razemTab = (funTab, cb) => {
    const proms = funTab.map(fn => fn());
    Promise.all(proms).then(results => {
        cb(results)
    })
};

const f1 = () => {
    return new Promise((resolve, reject) => {
        resolve(1)
    });
}
const f2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 500);
    });
}
const f3 = () => {
    return new Promise((resolve, reject) => {
        resolve(3)
    });
}
const c1 = (x) => console.log(x);

razemTab([f1,f2,f3], c1)