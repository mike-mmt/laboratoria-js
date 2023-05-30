const razem = (fun1, fun2, cb) => {
    const wyniki = [];
    
    fun1(callback, wyniki)
    fun2(callback, wyinki)
}

const fn1 = (cb, wyniki) => {
    setTimeout(() => {
        console.log("w fn1");
        cb(7, wyniki)
    }, 2000);
}
const fn2 = (cb, wyniki) => {
    setTimeout(() => {
        console.log("w fn2");
        cb(6, wyniki)
    }, 1000);
}

const callback = (x, wyniki) => {
    wyniki.push(x)
    if (wyniki.length == 2) {
        console.log(`Wyniki: ${wyniki}`);
    }
}

razem(fn1, fn2, callback)
