const axios = require('axios');
// const generateRandomNumber = () => Math.floor(Math.random() * 100) % 50;

function fetchUser(id) {
    return new Promise((resolve, reject) => {
        return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.data)
            .then(userData => {
                axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                    .then(postsResponse => postsResponse.data)
                    .then(postsData => {
                        const finalObject = {
                            userId: id,
                            name: userData.name
                        };
                        const posts = postsData.map(post => {
                            return {
                                postId: post.id,
                                title: post.title,
                                body: post.body
                            };
                        });
                        finalObject["posts"] = posts;
                        resolve(finalObject);
                    });
            })
            .catch(() => reject(`Nie znaleziono użytkownika o id ${id}`));

    });
}

// axios.get("https://jsonplaceholder.typicode.com/posts?userId=3")
//     .then(response => response.data)
//     .then(data => console.log(data))
//     .catch(err => console.log("1"));

// fetchUser(generateRandomNumber())
//     .then(res => console.dir(res, { depth: null }))s
//     .catch(err => console.log(err));

fetchUser(3)
    .then(res => console.dir(res, { depth: null }))
    .catch(err => console.log(err));