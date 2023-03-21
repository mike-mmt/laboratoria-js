'use strict';
// Tablicę obiektów zmodyfikuj tak, aby znajdujące się w niej obiekty znajdowały się pod ich id jako indeks.

//   // Output:  
//   [ 
//     { abc: { id: 'abc', name: 'Ala' } }, 
//     { def: { id: 'def', name: 'Tomek' } }, 
//     { ghi: { id: 'ghi', name: 'Jan' } }
//   ]
  
const arr = [ 
    { id: 'abc', name: 'Ala' }, 
    { id: 'def', name: 'Tomek' }, 
    { id: 'ghi', name: 'Jan' } 
  ];

console.log(arr.reduce( (acc, val) => {
    const obj = {};
    obj[val['id']] = val;
    return [...acc, obj ]
}, []));

