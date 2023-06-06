const razem = (fun1, fun2, cb) => {
    const wyniki = [];
    const checker = (x) => {
        wyniki.push(x)
        if (wyniki.length == 2) {
            cb(wyniki)
        }
    }
    fun1(checker)
    fun2(checker)

};

const f1 = (cb) => {
    setTimeout(() => {
        cb(5)
    }, 1000);
}
const f2 = (cb) => {
    setTimeout(() => {
        cb(7)
    }, 2000);
}

const c1 = (results) => {
    console.log(results);
}

razem(f1, f2, c1);