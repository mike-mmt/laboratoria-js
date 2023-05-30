const connect = (funTab, fun) => {
    const proms = funTab.map(fn => fn())
    return Promise.all(proms)
        .then(results => {
            // return results.map(x => [x, fun(x)])
            const evaluatedResultsPromises = results.map(x => fun(x));
            return Promise.all(evaluatedResultsPromises)
                .then(evaluatedResults => {
                    return results.map((x, index) => [x, evaluatedResults[index]]);
                })
        })
};

const fn1 = () => {
    return new Promise((resolve, reject) => {
        resolve(5)
    });
}
const fn2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(6)
        }, 1000);
    });
}
const fn3 = () => {
    return new Promise((resolve, reject) => {
        resolve(7)
    });
}
const fnx = (x) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x * 3)            
        }, 1000);
    });}

connect([fn1, fn2, fn3], fnx)
    .then(res => console.log(res));