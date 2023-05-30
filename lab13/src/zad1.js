const poKolei = (fun1, fun2, cb) => {
    fun1()
        .then(result => {
            return fun2(result)
        })
        .then((result) => {
            cb(result)
        })
        
}