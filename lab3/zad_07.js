function sortWord(arr) {
    return arr.sort( (a,b) => { return (a.length > b.length) ? 1 : -1 } )
}

const data = ['pies', 'kot', 'chomik', 'królik', 'wiewiórka']

console.log(sortWord(data));