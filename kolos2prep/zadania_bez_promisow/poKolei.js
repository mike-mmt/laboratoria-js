const poKolei = (fun1, fun2, cb) => {
    fun1(fun2, cb);
};

const f1 = (fun2, cb) => {
    setTimeout(() => {
        fun2(5, cb)
    }, 1000);
}

const f2 = (x, cb) => {
    setTimeout(() => {
        cb(x + 7)
    }, 500);
}

const c1 = (x) => {
    console.log(x);
}

poKolei(f1, f2, c1);