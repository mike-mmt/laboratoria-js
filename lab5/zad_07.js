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
    return acc + val.ilosc*val.cena
},0)

console.log(wydatek);

