const persons = [
    { name: 'Jan', age: 22 },
    { name: 'Grzegorz', age: 19 },
    { name: 'Halina', age: null },
    { name: 'Agata', age: 24 },
    { name: 'Krzysztof', age: 40 },
    { name: 'Adam', age: 29 }
  ]

function sortPerson(arr) {
    const returnArr = [];
    arr.filter((element) => element['age'] != null).sort((a, b) => a['age'] < b['age'] ? -1 : 1).forEach(elem => {
        returnArr.push(elem['name'])
    });
    return returnArr;
}

console.log(sortPerson(persons));