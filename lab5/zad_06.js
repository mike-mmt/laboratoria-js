'use strict';
// Wykorzystując plik games.js stwórz tablicę stringów zawierającą tylko 4 pierwsze linki obiektów do zdjęć. 

// Output
// ['https://...', 'https://...', 'https://...', 'https://...']

// Plik games.js powinien pozostać bez zmian, a rozwiązanie powinno zostać zawarte w innym pliku.
// Aby odwołać się do zmiennej z zewnętrzenego pliku na górze swojego rozwiązania umieść:
const games = require('./games.js').games;

const result = games.reduce((acc, val, index) => {
    return (acc.length < 4 && val.imageUrl != '') ? [...acc, val.imageUrl] : acc
},[])

console.log(result);