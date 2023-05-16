function counter(num, milis) {
    return () => {
        let countingNum = 1;

        console.log(countingNum);

        const interval = setInterval(() => {
            console.log(++countingNum);
        }, milis);

        setTimeout(() => {
            clearInterval(interval);
        }, milis * num);
    };
}

const newCounter = counter(16, 500);

newCounter();