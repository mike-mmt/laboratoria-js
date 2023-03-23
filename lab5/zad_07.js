const shoppingList = require('./shoppingList.js').shoppingList;

// // pierwsza funkcja: 
// obj = {
//     typ: [{...},{...}],
//     typ: [{...},{...}],
//     typ: [{...},{...}]
// }

// Object.keys(obj).reduce((acc, val) => {
//     arr[val].reduce ( ... )
// })

//a Patrząc na listę zakupów policz, ile w sumie wydasz na nabiał. 

const wydatek = shoppingList.reduce((acc,val) => {
    
    return val.typ === "nabiał" ? acc + val.ilosc*val.cena : acc
},0)

console.log(wydatek);

//b Znajdź wszystkie produkty, które kupisz na kilogramy,
// a następnie wypisz je w kolejności alfabetycznej (tablica stringów)

const naKilo = shoppingList.reduce((acc,val) => {
    if (val.jednostka === "kg") {
      return [...acc, val]  
    }
    else return acc
},[]).sort()

console.log(naKilo);

//c Zwróć listę zakupów jako string,
// który każdy z produktów będzie wypisywał w następujący sposób (kolejność dowolna):

const obj = shoppingList.reduce((acc,val) => {
    if (val.typ in acc) {
        acc[val.typ] = [...acc[val.typ], val]
    } else {
        acc[val.typ] = [val]
    }
    return acc
},{});

const wynik = Object.keys(obj).reduce((acc, val) => {
    return `${acc}${val}:\n${obj[val].reduce((acc2,val2,index2) => {
        return `${acc2}${index2+1}. ${val2.produkt}\n`
    },"")}\n\n`
},"")
// console.log(obj);

console.log(wynik);