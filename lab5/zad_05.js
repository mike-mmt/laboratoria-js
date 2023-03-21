'use strict';

const wishlist = [   
    { name: 'Czajnik', netto: 100 },  
    { name: 'Lodówka', netto: 2730 },  
    { name: 'Mikrofalówka', netto: 940 },  
    { name: 'Mikser', netto: 120 },  
    { name: 'Piekarnik', netto: 3100 }, 
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
  ]

//a   Oblicz całkowity koszt wszystkich produktów (pamiętaj, aby doliczyć podatek VAT 23%).

console.log(wishlist.reduce((acc, val) => {
    return acc + val.netto*1.23
},0));

//b   Zamień tablicę obiektów w tablicę wartości (cen netto).

const ceny = wishlist.reduce((acc, val) => {
    return [...acc, val.netto]
},[])

console.log(ceny);

//c   Potrzebujemy naszej listy zakupów w formie tablicy stringów, gdzie każdy element to:
  
//   'nazwa: cena netto'
  
//   Napisz funkcję, która przyjmuje w parametrach tablicę i funkcję, a następnie zwraca przetworzoną tablicę.
  
//   // Przykładowe działanie:
//   const newArray = func(wishlist, (x) => x.name + ": " + x.netto);
//   console.log(newArray);// wypisanie nowej tablicy
  
//   Uwaga: Pierwotna tablica nie zostaje modyfikowana. 

function arrayTransformThingy(array, passedFunction) {
    return array.reduce((acc, val) => {
        return [...acc, passedFunction(val)] 
    },[])
}

const newArray = arrayTransformThingy(wishlist, (x) => x.name + ": " + x.netto);

console.log(newArray);

//d Podobnie, jak w poprzednim zadaniu, stwórz funkcję przyjmującą w parametrach tablicę i funkcję. W zależności od przekazanej funkcje wyfiltruj odpowiednio obiekty (np. tańsze niż 500).

// // Przykładowe działanie:
// const newArray = func(wishlist, (x) => x.netto < 500)
// console.log(newArray); // wypisanie tablicy obiektów

function arrayFilterThingy(array, passedFunction) {
    return array.reduce((acc,val) => {
        return passedFunction(val) ? [...acc, val] : acc
    },[])
}

const newArray2 = arrayFilterThingy(wishlist, (x) => x.netto < 500);

console.log(newArray2);

//e Napisz funkcję przyjmującą tablicę i funkcję.
// W zależności od przekazanej funkcji znajdź obiekt spełniający podany warunek.
// Zakładamy, że przyjmowana lista zawiera unikalne obiekty.
// Jeśli danego elementu nie ma w tablicy, zwróć undefined

// Przykładowe działanie:
// const result = func(wishlist, (x) => x.name === 'Mikser' );  
// console.log(result); // wypisanie obiektu

function findMatchingObject(array, condition) {
    return array.reduce((acc, val) => {
        return condition ? val : acc
    },undefined)
}

const result = findMatchingObject(wishlist, (x) => x.name === 'Mikser' );

console.log(result);