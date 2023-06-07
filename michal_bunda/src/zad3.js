const porownaj = (fun1, fun2, cb) => {
    const wyniki = [];
    const promTab = [fun1(), fun2()];
    promTab.forEach(prom => prom.then(res => {
        wyniki.push(res);
        if (wyniki.length === 2) {
            const areEqual = wyniki[0] === wyniki[1];
            cb(areEqual);
        }
    }));
};

// const porownaj2 = (fun1, fun2, cb) => {      // dla innych typow porownania niz ====
//     let iloscWynikow = 0;                    // gdzie kolejnosc wynikow ma znaczenie
//     const wyniki = [];
//     const promTab = [fun1(), fun2()];
//     promTab.forEach((prom, index) => prom.then(res => {
//         wyniki[index] = res;
//         iloscWynikow++;
//         if (iloscWynikow === 2) {
//             const isFirstBigger = wyniki[0] > wyniki[1];
//             cb(isFirstBigger);
//         }
//     }));
// };

const f1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(3);
        }, 1000);
    });
};

const f2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(4);
        }, 200);
    });
};

const f3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(3);
        }, 500);
    });
};

const c1 = (res) => {
    console.log("Wynik porównania", res);
};

porownaj(f1, f2, c1);
porownaj(f1, f3, c1);

// porownaj2(f2, f3, c1);

