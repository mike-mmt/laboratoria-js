const getRand = () => {
    return Math.floor(Math.random() * 1000);
  };
  
const getNum = (cb) => {
setTimeout(() => {
    cb(getRand());
}, getRand() * 5);
};

const asyncSort = (dim) => {
    results = [];
    const cb = (res) => {
        results.push(res)
        if (results.length === dim) {
            const final = results.sort((a, b) => a > b)
            console.log(final);
            return final;
        }
    }
    Array(dim).fill().map(element => getNum(cb))
  };

asyncSort(5)