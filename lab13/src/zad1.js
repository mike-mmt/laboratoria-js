

function fn1(x, fun, cb) {

    setTimeout(() => {
        console.log("Wywolanie fn1");
        fun(x, cb);
    }, 2000);
};
function fn2(x, cb) {
    setTimeout(() => {
        console.log("Wywołanie fn2");
        cb(x + 1);
    }, 1000);
};
function cb1(x) {
    console.log(x);
};

const poKolei = (fun1, fun2, cb) => {
    fun1(2, fun2, cb);
}



poKolei(fn1, fn2, (res) => {
    console.log(`Resultat: ${res}`);
});