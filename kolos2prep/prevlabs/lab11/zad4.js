function f4() {
    console.log("Welcome");
    const welcomer = setInterval(() => {
        console.log("Welcome");
    }, 1000);
    setTimeout(() => {
        clearInterval(welcomer)
    }, 5000);
}

f4()