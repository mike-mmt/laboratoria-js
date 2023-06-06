const bbb = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("🤯")
    }, 5000);
})

bbb.then(() => {},(reject) => console.log(reject));
bbb.catch((error) => console.log(error));