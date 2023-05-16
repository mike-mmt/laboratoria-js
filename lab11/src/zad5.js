function periodicallyExecuteAndStop(fn, x, y) {
    fn();
    const interval = setInterval(() => fn(), x*1000);

    setTimeout(() => {
        clearInterval(interval);
    }, y*1000);
}

const fn1 = () => console.log("!!!");

periodicallyExecuteAndStop(fn1, 2, 8);