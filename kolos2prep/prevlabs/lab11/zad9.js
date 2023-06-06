function counter(x, y) {
  return () => {
    console.log(1);
    if (x > 1) {
      let current = 2;
      const interval = setInterval(() => {
        console.log(current);
        current++;
        if (current > x) {
            clearInterval(interval)
        }
      }, y);
    }
  };
}

const newcounter = counter(5, 1000);

newcounter()