const products = [
    { name: 'Product 1', price: 10, quantity: 2 },
    { name: 'Product 2', price: 5, quantity: 4 },
    { name: 'Product 3', price: 8, quantity: 3 },
    { name: 'Product 4', price: 12, quantity: 1 },
];

const calculateProductValue = (product, cb) => {
    setTimeout(() => {
        const value = product.price * product.quantity;
        cb(value);
    }, Math.floor(Math.random() * 1000));
};

function calculateTotalValue(n, cb) {
    return new Promise((resolve, reject) => {
        if (n >= 1 && n <= products.length) {
            const results = [];
            const strongerCB = (res) => {
                results.push(res);
                if (results.length === n) {
                    const finalSum = results.reduce((acc, current) => {
                        return acc + current;
                    }, 0);
                    cb(finalSum);
                    resolve(finalSum);
                }
            };
            Array(n).fill().forEach((element, index) => calculateProductValue(products[index], strongerCB));
        } else {
            reject("n outside of array range");
        }
    });
}

calculateTotalValue(3, (response => {
    console.log("Wynik", response);
}));