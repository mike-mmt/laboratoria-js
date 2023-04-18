'use strict';

// ==============================================
// Przeanalizuj poniższe fragmenty kodu i zastanów się, co zostanie wypisane na ekranie.
// ==============================================

//#region EXAMPLES

// Przykład 1

const arr = ['Pies', 'Kot', 'Królik', 'Papuga', 'Małpa'];
const [pies, kot, krolik, papuga, malpa] = arr;

// console.log(pies, krolik); // Pies Królik

// Przykład 2

const book = {
  title: 'Mistrz i Małgorzata',
  author: 'Michaił Bułhakow',
  year: 1967
};

// a

const { title, author, year } = book;

// console.log(title);  // Mistrz i Małgorzata
// console.log(author); // Michaił Bułhakow

// b

const {
  title: titleOfBook,
  author: authorOfBook,
  year: yearOfBook
} = book;

// console.log(titleOfBook); // Mistrz i Małgorzata
// console.log(authorOfBook); // Michaił Bułhakow

// c

const { title: onlyTitle, ...bookWithoutTitle } = book;

// console.log(onlyTitle); // Mistrz i Małgorzata
// console.log(bookWithoutTitle); // { author: ..., year: ... }


//#endregion EXAMPLES


// ==============================================
// ZADANIA
// ==============================================

// Zadanie 1

// Wykorzystując wszystkie informacje zawarte powyżej stwórz obiekt zawierający poniższe pola:
// country: USA
// title: Zielona Mila
// director: Frank Darabont
// genre: Dramat

const movie1 = {
  country: 'USA',
  title: 'Zielona Mila',
  director: 'Frank Darabont',
  genre: 'Dramat'
};

// Następnie wykorzystując zabieg przedstawiony w powyższych przykładach zmodyfikuj obiekt tak, aby po wyświetleniu obiektu dostać następujący output:

const {
  country,
  genre,
  ...newMovie1
} = movie1;

console.log(newMovie1);
// Oczekiwany output: { title: 'Zielona Mila', director: 'Frank Darabont' }


// Zadanie 2

// Stwórz teraz bardziej skomplikowany obiekt zawierający m.in tablicę i inny obiekt. Powiedzmy, że zawiera np.
// title: Nietykalni
// directors: Olivier Nakache, Éric Toledano
// country: Francja
// year: 2011
// actors: Philippe: François Cluzet, Dris: Omar Sy, Yvonne: Anne Le Ny

const movie2 = {
  title: 'Nietykalni',
directors: ['Olivier Nakache', 'Éric Toledano'],
country: 'Francja',
year: 2011,
actors: { Philippe: 'François Cluzet', Dris: 'Omar Sy', Yvonne: 'Anne Le Ny' }
};

// Następnie odwzoruj wygląd stworzonej struktury obiektu i wykonaj na nim poniższe operacje

const {
  title: titleOfMovie,
  directors: [director1, director2],
  actors: {
    Philippe: philippeRole,
    Dris: drisRole,
    Yvonne: yvonneRole
  } 
} = movie2;

console.log(titleOfMovie); // Oczekiwany output -> Nietykalni
console.log(director1); // Oczekiwany output -> Olivier Nakache
console.log(director2); // Oczekiwany output -> Éric Toledano
console.log(philippeRole); // Oczekiwany output -> François Cluzet
console.log(drisRole); // Oczekiwany output -> Omar Sy
console.log(yvonneRole); // Oczekiwany output -> Anne Le Ny
