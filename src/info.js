// callbacki
// function func1() {
//     console.log("1");
// }

// function func2(func) {
//     console.log("2");
//     func();
// }

// function func3(func, fun) {
//     console.log("3");
//     func(fun);
// }

// func3(func2(func1));

// promisy

function func() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("hello");
        }, 2000);
    });
}

func().then((response) => {
    console.log("ok" + response);
}).catch((error) => {
    console.log("nie ok" + error);
}).finally(() => {
    console.log("koniec");
});

func().then(() => {
    console.log("ok");
}, () => {
    console.log("nie ok");
});