function func1() {
    console.log("Func 1");
}

const func2 = function() {
    console.log("Func 2");
}

const func3 = () => {
    console.log("Func 3");
}

const func4 = (a) => {
    // if (a > 0) {
    //     return true;
    // } else {
    //     return false;
    // }                       // zwykly if else
 
    // return a > 0 ? true : false;  // ternary operator

    return a > 0;                     //
}

const func5 = (a) => a > 0;

const arr = [1, 2, 4];

arr.forEach((el) => {
    console.log(el);
})

// func1()
// func2()
// func3()

let tmp = 'vghj'
// !tmp -> false
// !null -> true
if (tmp !== null) {
    // ...    
}
if (tmp) {
    // ...
}