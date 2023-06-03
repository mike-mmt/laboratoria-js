const getRand = () => {
    return Math.floor(Math.random() * 1000);
  };
  
const getNum = (cb) => {
    setTimeout(() => {
        cb(getRand());
    }, getRand() * 5);
};

const asyncSort = (dim) => {
    // ...
    const wyniki = [];
    const callback = (result) => {
        wyniki.push(result)
        if (wyniki.length === dim) {
            return wyniki.sort((a, b) => a < b)
        }
    }

    for (let i = 0; i < dim; i++) {
        getNum(callback)
    }
}

asyncSort(5)