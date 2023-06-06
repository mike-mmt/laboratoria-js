const poKolei = (fun1, fun2, fun3, cb) => {
    // Uzupełnij
    let wynik;
    fun1().then((result) => {
        wynik = result;
    }).catch((err) => {
        wynik = err;
    }).finally(() => {
        fun2(wynik).then((result) => {
            wynik = result;
        }).catch((err) => {
            wynik = err;
        }).finally(() => {
            fun3(wynik).then((result) => {
                wynik = result;
            }).catch((err) => {
                wynik = err;
            }).finally(() => {
                cb(wynik);
            })
        })
    })
  };