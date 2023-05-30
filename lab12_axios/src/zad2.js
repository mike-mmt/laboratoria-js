const { default: axios } = require("axios");

function pull5RandomPosts() {
    const postNumbers = Array.from({length: 5}, () => Math.floor(Math.random() * 100));
    // console.log(postNumbers);
    const requests = postNumbers.reduce((acc, num) => {
        const promPost = axios.get(`https://jsonplaceholder.typicode.com/posts/${num}`)
            .then(response => response.data);
        const promComments = axios.get(`https://jsonplaceholder.typicode.com/posts/${num}/comments`)
            .then(response => response.data);
        return [...acc, promPost, promComments];
    }, []);

    Promise.all(requests)
        .then(responses => {
            return responses.reduce((acc, current, index) => {
                if (index % 2 === 1) {
                    return [...acc];
                } else {
                    // const formattedObj = {};
                    // formattedObj["entry"] = {
                    //     title: current.title,
                    //     body: current.body
                    // };
                    // const comments = [];
                    // responses[index+1].forEach((comment) => {
                    // const { name, email, body } = comment;
                    // comments.push({
                    //     name: name,
                    //     email: email,
                    //     body: body
                    //     });
                    // });
                    // formattedObj["comments"] = comments;
                    return [...acc, {
                        entry: { title: current.title, body: current.body },
                        comments:  responses[index+1].map(comment => ({name: comment.name, email: comment.email, body: comment.body}))
                    }];
                }
            }, []);
        })
        .then(result => console.dir(result, { depth: null}));
    // Promise.all(requests)
    //     .then(([res1,res2,res3,res4,res5]) => {

    //     })

    // const myPromises = (promises) => promises.reduce((acc, [postPromise, commentsPromise]) => {
    //     return Promise.all(acc)
    //         .then( ([postResult, commentsResult]) => {
    //         const formattedObj = {};
    //         const entry = {};
    //         entry["title"] = postResult.data.title;
    //         entry["body"] = postResult.data.body;
    //         formattedObj["entry"] = entry;
    //         const comments = [];
    //         commentsResult.data.forEach((comment) => {
    //             const { name, email, body} = comment;
    //             comments.push({ name: name, email: email, body: body});
    //         });
    //         formattedObj["comments"] = comments;
    //         console.log(formattedObj);
    //         return [postPromise, commentsPromise];
    //     });
    // });

    // myPromises(requests);


}


pull5RandomPosts();