// roznica miedzy forEach a map          (map zwraca obiekt, forEach wykonuje akcje)
const arr = [ { a: 1}, {a :2 }];

const res = []
arr.forEach((el) => {
    res.push(el.a);      // jakies akcje
});

console.log(res);

const res2 = arr.map((el) => {
    return el.a;        // "co dodać do nowo utworzonej res2?"
    // return { id: el.a }
});

console.log(res2);

