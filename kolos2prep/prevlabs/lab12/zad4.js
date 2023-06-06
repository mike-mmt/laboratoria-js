let czasSukces;

const checkTime = (arg, maxTries) => {
  return new Promise((resolve, reject) => {
    const helper = (timeToCheck) => {
      const start = Date.now();
      let tries = 0;
      const interval = setInterval(() => {
        console.log("Sprawdzam ponownie");
        if (tries >= maxTries) {
          console.log("Limit prób przekroczony");
          clearInterval(interval);
          return helper(timeToCheck - 2000);
        } else if (Date.now() > start + timeToCheck) {
          clearInterval(interval);
          console.log("Czas upłynął ");
          const date = new Date();
          czasSukces = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
          resolve(czasSukces);
        }
        tries++;
      }, 1000);
    };
    helper(arg);
  });
};

checkTime(7000, 6).then(() => {
  console.log(czasSukces);
});
