'use strict';

// Poniższe fragmenty kodu zostały zakomentowane w celu utrzymania porządku. 
// Odkomentowuj je na bieżąco i zapisuj odpowiedzi w komentarzu. 
// Ostatecznie przed wrzuceniem pliku na repozytorium zakomentowane powinny być tylko dodane odpowiedzi i fragmenty kodu powodujące ewentualne błędy.

// ========================= Zadanie 1 =========================
// Co wypisze funkcja dla każdego z poniższych przypadków?
// Wyjaśnij, dlaczego w niektórych przypadkach wyniki różnią się.

// ========================== UWAGA =============================
// Zapis 
// (impression) ? console.log('A') : console.log('B');
// Jest skróconą wersją:
// if (impression) {
//     console.log('A');
// } else {
//     console.log('B');
// }
// ==============================================================

function isEquals(val1, val2) {
    (val1 == val2) ? console.log('A') : console.log('B');
    (val1 === val2) ? console.log('C') : console.log('D');
}

isEquals(2, '2');    // A D
isEquals(null, undefined);   // A D
isEquals(undefined, NaN);    // B D
isEquals(['a', 'b', 'c'], ['b', 'c', 'd']);  // B D
isEquals(0, '');     // A D
isEquals('0', '');   // B D
isEquals(+0, -0);    // A C
isEquals(0, false);  // A D
isEquals(0, 'false');    // B D
isEquals([1, 2], '1,2'); // A D

// Co zwróci kazde z ponizszych wyrazen?
!!false;    // false
!!true;     // true
!!undefined; // false
!!null;    // false

// ========================= Zadanie 2 =========================
// Jaki będzie efekt działania poniższego fragmentu kodu?
// Wyjaśnij wynik

const person = {
    firstName: 'Jan',
    lastName: 'Kowalski'
}

console.log(person); // { firstName: 'Jan', lastName: 'Kowalski' }
// person = {};        // person jest stałą, nie można przypisać nowej wartości
// console.log(person); 

// ========================= Zadanie 3 =========================
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

let number = 3;
console.log(number); {   // 3
    let number = 4;
    console.log(number);  // 4
}
console.log(number);     // 3

// ========================= Zadanie 4 =========================
// Czym się różnią poniższe dwa fragmenty kodu?
// Jak działa operator '...'?

const arr = [1, 2];
const newArr1 = [arr, 3, 4];
console.log(newArr1);        // [[1, 2], 3, 4]
const newArr2 = [...arr, 3, 4];
console.log(newArr2);        // [1, 2, 3, 4]

// operator '...' przekazuje wszystkie wartości z tablicy ( a nie samą tablicę )

// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

const word = 'javascript';   
const arrWord = [...word];
console.log(arrWord);    // [ 'j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

// ========================= Zadanie 5 =========================
// Zapoznaj się z kodem poniżej. Jaki będzie jego wynik i dlaczego?

var hello = 'Hello world!';
var result = hello / 2;  

// console.log(result);     // 'Hello ' (?)     // błąd NaN

console.log(Number.isNaN(result));   // true
console.log(Number.isNaN(hello));    // false

// ========================= Zadanie 6 =========================
// Zapoznaj się z przykładami poniżej. Jaka jest różnica między var a let/const?

var car = 'BMW';

function showCar() {
    car = 'Audi';
    // model = 'A5';    // błąd
    console.log('Great car!');
}

showCar();   

console.log(car);
// console.log(model);  // błąd

// -------

var name = 'Bryan';

function differentName() {
    var name = 'Adam';
    console.log(name);
};

differentName();

console.log(name);

// -------

if (true) {
    var a = 2;
}
console.log(a);

if (true) {
    const b = 2;
}
// console.log(b); // błąd

// różnica polega na tym, że var jest globalne - 
// - nieważne gdzie było stworzone, będzie wszędzie dostępne, a let/const jest lokalne

// -------

// Dla sprawdzenia działania obu poniższych pętli odkomentuj najpierw jedną, później drugą.
// Jaki będzie rezultat jeśli obie pętle bedą odkomentowane jednocześnie. Wyjaśnij dlaczego.

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);

// ze względu na to że var sprawia, że zmienna jest globalna można poprawnie wywołać console.log(i) poza pętlami 

// -------

var test = "var1";
var test = "var2";

// let test2 = "let1"; // nie można zamienić zmiennej utworzonej przez var na zmienną tworzoną przez let
// let test2 = "let2";

// ========================= Zadanie 7 =========================
// Do czego używany jest 'use strict' w pierwszej linijce skryptu?

// używany jest po to, aby błędy przerywały pracę programu,
//  bez tego JS zwykle jest w stanie 'przejść' przez błędy teoretycznie bez problemów