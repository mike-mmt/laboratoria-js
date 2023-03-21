const arr = [4, 2, 4, 1];

// funkcja wykonywana w reducie przekazuje zwracaną wartość do 'acc' (akumulatora) następnej iteracji
const result = arr.reduce((acc, currentValue, index, array) => {
    return 
}, 0)
// ^
// !!! zawsze trzeba podać initialValue akumulatora !!!

console.log(result)