function multiply(x, y) {
    return function(z) {
        return x*y*z;
    };
}

const result = multiply(2, 3)(5);

console.log(result); // oczekiwany wynik: 30