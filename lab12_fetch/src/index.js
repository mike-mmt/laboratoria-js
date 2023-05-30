'use strict';

/*
Zadanie 1.1
Za pomocą funkcji fetch wykonaj zapytanie metodą GET pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200).
Jeśli tak - zwróć response, w przeciwnym wypadku - wypisz błąd w konsoli.
Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.
*/

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    if (response.status === 200) {
      // console.log(response);
      return response;
    } else {
      console.log("error");
    }
  })
  .catch((reject) => {
    console.log(`error: ${reject}`);
  })
  .then((result) => {
        const { headers } = result;
        console.log(headers);
        return result.json();
      })
    .then((data) => {
      console.log(data);
    });

/*
Zadanie 1.2
Stwórz funkcje, która przyjmuje jako parametr obiekt w postaci:
{
  idUser: (pole typu int)
  title: (pole typu string)
  completed: (pole typu boolean)
}

Następnie wysyła taki obiekt za pomocą funkcji fetch pod url: https://jsonplaceholder.typicode.com/todos
Jeśli dodanie zakończy się sukcesem - wyświetl w konsoli komunikat 'Dodano' i id dodanego obiektu. W przeciwnym wypadku wypisz błąd.
*/

function poster(objectToPost) {
  if (Object.keys(objectToPost).length === 3 && ['idUser', 'title', 'completed'].every(key => key in objectToPost)) {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(objectToPost)
    })
    .then((response) => {
      console.log('Dodano');
      return response.json();
    }).catch((err) => {
      console.log(`error: ${err}`);
    })
    .then((data) => {
      console.log(data.id);
    });
  }
}

poster({
  idUser: 7,
  title: "crazy title",
  completed: false
});