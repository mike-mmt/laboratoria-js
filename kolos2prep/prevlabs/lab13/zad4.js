const connect = (funTab, fun) => {
    const promTab = funTab.map(fn => fn())
    return Promise.all(promTab)
        .then(results => {
            // console.log(results);
            const processedPromTab = results.map(res => fun(res))
            return Promise.all(processedPromTab)
                .then(processedResults => {
                    return results.reduce((acc, value, index) => {
                        return [...acc, [value, processedResults[index]]]
                    }, [])
                })
        })
};

const f1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000);
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
        setTimeout(() => {
            resolve(3)
        }, 1500);
    });
}
const fnx = (x) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x*3)
        }, 200);
    });
}

connect([f1,f2,f3], fnx).then(res => console.log(res))

