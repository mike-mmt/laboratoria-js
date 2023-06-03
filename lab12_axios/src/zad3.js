const poKolei = (fun1, fun2, fun3, cb) => {
    let result = 0;
    fun1()
    .then((res) => {
        result = res;
    }).catch((res) => {
            result = res;
    }).finally(() => {
        fun2(result)
        .then((res) => {
            result = res;
        }).catch((res) => {
            result = res;
        }).finally(() => {
            fun3(result)
            .then((res) => {
                result = res;
            }).catch((res) => {
                result = res;
            }).finally(() => {
                cb(result);
            })
        });
    });
  };

const fn1 = () => {
    return new Promise((resolve, reject) => {
        resolve(7);
    });
};
const fn2 = (x) => {
    return new Promise((resolve, reject) => {
        reject(x + 8);
    });
};
const fn3 = (x) => {
    return new Promise((resolve, reject) => {
        resolve(9 - x);
    });
};
const fn4 = (x) => console.log(x);

poKolei(fn1, fn2, fn3, fn4);