// Przetestuj poniższy kod i odpowiedz na pytania

// 1. Czym jest this?
// this odnosi się do obiektu w którym zostało wywołane

// 2. Do czego się odwołuje w każdym z przypadków?
// p1. w testThis odwołuje się do samej funkcji testThis(), a w testThis2 do undefined (?)
// p2. odwoluje sie do obiektu person, ponieważ a() jest funkcją w funkcji obiektu (nie jest bezpośrednią metodą obiektu?)
// p3. odwoluje sie do obiektu person3 (w obu przypadkach)
// p4. do obiektu details, do obiektu person4

// 3. Co wydrukuje w konsoli poniższy kod w każdym z przykładów? 


// 4. Jaki scope ma arrow function? (Na podstawie przykładów 3. i 4.)
// arrow function nie ma "własnego" scope (ani własnego this), tylko korzysta ze scope w którym się znajduje, a więc this wskazuje na obiekt w ktorym ta funkcja sie znajduje 


// ------------
// Przykład 1.
// ------------

function testThis() {
  console.log(this);
}

// testThis();

function testThis2() {
  "use strict";
  console.log(this);
}

// testThis2();


// ------------
// Przykład 2.
// ------------

const person = {
  name: "Oscar Wilde",
  print() {
    console.log(this.name);

    function a() {
      console.log(this);
    }
    a();
  },
};

// person.print();


// ------------
// Przykład 3.
// ------------

const person3 = {
  name: "Arthur Conan Doyle",
  print() {
    console.log(this);
    const a = () => {
      console.log(this);
    };
    a();
  },
};

// person3.print();


// ------------
// Przykład 4.
// ------------

const person4 = {
  name: "Jan Kowalski",
  print: function() {
    const details = {
      age: 24,
      print1: function() {
        'use strict';
        console.log(this);
      },
      print2: () => {
        'use strict';
        console.log(this);
      }
    }
    details.print1();
    details.print2();
  }
}

person4.print();
