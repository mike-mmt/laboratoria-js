function razem(promisesTab, callback) {
    const wyniki = [];
    promisesTab.forEach(prom => {
        prom.then(res => {
            wyniki.push(res)
            if (wyniki.length >= promisesTab.length) {
                callback(wyniki)
            }
        })
    });
}

function razem2(promisesTab, callback) {
    const wyniki = [];
    let resolved = 0;
    promisesTab.forEach((current, index) => {
        current.then(res => {
            wyniki[index] = res;
            resolved++;
            if (resolved >= promisesTab.length) {
                callback(wyniki)
            }
        })
    })
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1500);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 500);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3)
    }, 1000);
})
const cb = (x) => {console.log(x)};

razem2([p1,p2,p3], cb)