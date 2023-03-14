'use strict';

const persons = [
    { id: 1, firstName: 'Adam', lastName: 'Nowak' },
    { id: 2, firstName: 'Kamil', lastName: 'Kowalski' },
    { id: 3, firstName: 'Anna', lastName: 'Mazur' },
    { id: 4, firstName: 'Katarzyna', lastName: 'Maj' },
    { id: 5, firstName: 'Jakub', lastName: 'Adamski' }
  ]
  
const personsMap = persons.map( (element) => ({label: `${element["firstName"]} ${element["lastName"]}`, value: element}) );

personsMap.forEach((el) => {console.log(el);})

// map zwraca jakiś obiekt, forEach wykonuje tylko jakieś akcje (nic nie zwraca)