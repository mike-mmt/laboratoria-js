"use strict";
const axios = require("axios");
/* 
Zadanie 1.1

Stwórz projekt i dołącz do niego bibliotekę axios.

Następnie wykonaj zapytanie metodą GET za pomocą dodanej biblioteki pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200). 
Jeśli tak - zwróć response, w przeciwnym wypadku - wypisz błąd w konsoli.
Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.
*/

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (response.status === 200) {
      return response;
    } else {
      console.log("Error");
    }
  })
  .then((result) => {
    const { data, headers } = result;
    console.log(data, headers);
  });

/* 
Zadanie 1.2 
Stwórz funkcje, która przyjmuje jako parametr obiekt w postaci:
{
  idUser: (pole typu int)
  title: (pole typu string)
  completed: (pole typu boolean)
}

Następnie wysyła taki obiekt za pomocą funkcji POST z biblioteki axios pod url: https://jsonplaceholder.typicode.com/todos
Jeśli dodanie zakończy się sukcesem - wyświetl w konsoli komunikat 'Dodano' i id dodanego obiektu. W przeciwnym wypadku wypisz błąd.
*/

function f1(objectToPost) {
  axios
    .post("https://jsonplaceholder.typicode.com/todos", objectToPost)
    .then((response) => {
      console.log(response.data.id);
    })
    .catch((err) => {
      console.log("Błąd!");
    });
}

f1({
  idUser: 7,
  title: "jhbkalsbagurio",
  completed: true,
});
