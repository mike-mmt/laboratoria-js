function toArray(a, b) {
    const a_2 = typeof(a) == object ? [...a] : [a]
    const b_2 = typeof(b) == object ? [...b] : [b]
    return [...a,...b]
}

// toArray(1, 2) //=> [1, 2]
// toArray(1, "tekst") //=> [1, "tekst"]
console.log(toArray("aa", [1, 2]));  //=> ["aa", 1, 2]
// toArray([1], null) //=> [1, null]