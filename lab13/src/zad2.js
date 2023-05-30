const razem = (fun1, fun2, cb) => {
    Promise.all([fun1(), fun2()])
        .then(results => {
            cb(results)
        })
}

const fn1 = () => {
    return new Promise((resolve, reject) => {
        resolve(5)
    });
}
const fn2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(8)
        }, 500);
    });
}
const cb1 = (args) => console.log(args);

razem(fn1, fn2, cb1)