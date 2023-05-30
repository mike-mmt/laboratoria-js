const grupuj = (funTab1, funTab2, cb) => {
    const promises1 = funTab1.map(fn => fn())
    const promises2 = funTab2.map(fn => fn())
    
    Promise.all(promises1)
        .then(results1 => {
            console.log(`$1$ ${results1}`);
            return [results1, Promise.all(promises2)]
            })
        .then(halfResultsAndPromise => {
            halfResultsAndPromise[1]
                .then(otherHalf => {
                    const firstHalf = halfResultsAndPromise[0];
                    console.log(`$2$ ${firstHalf} : ${otherHalf}`);
                    if (firstHalf.length >= otherHalf.length) {
                        return firstHalf.reduce((acc, current, index) => {
                            return otherHalf.length > index ? [...acc, [current, otherHalf[index]]] : [...acc, [current, 0]] 
                        },[])
                    } else {
                        return otherHalf.reduce((acc, current, index) => {
                            return firstHalf.length > index ? [...acc, [firstHalf[index], current]] : [...acc, [0, current]] 
                        },[])
                    }
                })
                .then(combinedResults => cb(combinedResults))
        })
        
}

const fun1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5)
        }, 250);
    });
}
const fun2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(6)
        }, 500);
    });
}
const fun3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(7)
        }, 750);
    });
}

const fun2_1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(4)
        }, 600);
    });
}
const fun2_2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(3)
        }, 300);
    });
}

const fnTab1 = [fun1, fun2, fun3];
const fnTab2 = [fun2_1, fun2_2];

const cb1 = (ress) => console.log(ress);//console.dir(ress, { depth: null });

grupuj(fnTab1, fnTab2, cb1);