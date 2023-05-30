const poKolei = (fun1, fun2, fun3, cb) => {
    fun1()
        .then(result => {
            return fun2(result);
        })
        .then(result => {
            return fun3(result);
        })
        .then(result => {
            cb(result);
        })
        .catch(err => cb(err));
  };

const fn1 = () => {
    return new Promise((resolve, reject) => {
        resolve(7);
    });
};
const fn2 = (x) => {
    return new Promise((resolve, reject) => {
        resolve(x + 8);
    });
};
const fn3 = (x) => {
    return new Promise((resolve, reject) => {
        resolve(9 - x);
    });
};
const fn4 = (x) => console.log(x);

poKolei(fn1, fn2, fn3, fn4);