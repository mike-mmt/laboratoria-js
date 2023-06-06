const grupuj = (funTab1, funTab2, cb) => {
  const promTab1 = funTab1.map(fn => fn());
  const promTab2 = funTab2.map(fn => fn());
  Promise.all([Promise.all(promTab1), Promise.all(promTab2)])
    .then((bothTabs) => {
      const formattedResult = bothTabs[0].length >= bothTabs[1].length ?
        bothTabs[0].reduce((acc, value, index) => {
          return [...acc, [value, index < bothTabs[1].length ? bothTabs[1][index] : 0 ]];
        }, [])
        : bothTabs[1].reduce((acc, value, index) => {
          return [...acc, [index < bothTabs[0].length ? bothTabs[0][index] : 0, value]];
        }, [])
      cb(formattedResult);
    })
};

f1 = () => {
  return new Promise((resolve, reject) => {
    resolve(1)
  });
}

f2 = () => {
  return new Promise((resolve, reject) => {
    resolve(2)
  });
}

f3 = () => {
  return new Promise((resolve, reject) => {
    resolve(3)
  });
}

f4 = () => {
  return new Promise((resolve, reject) => {
    resolve(4)
  });
}

f5 = () => {
  return new Promise((resolve, reject) => {
    resolve(5)
  });
}

grupuj([f1, f2], [f3,f4,f5], (res) => {console.log(res)})