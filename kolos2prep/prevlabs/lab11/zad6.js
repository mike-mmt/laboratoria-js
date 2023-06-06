const aaa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Udało się!")
    }, 5000);
})

aaa.then(result => console.log(result))