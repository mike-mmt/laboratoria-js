
function zad4() {
    console.log("Welcome!");
    const interval = setInterval(() => {
        console.log("Welcome!");
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
    }, 5000);
}

zad4();