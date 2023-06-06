const axios = require('axios');
const fiveRandomNums = Array(5)
  .fill()
  .map(() => Math.floor(Math.random() * 100));

// console.log(fiveRandomNums);

const posts = fiveRandomNums.map((number) =>
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${number}`)
    .then((response) => response.data)
);
const comments = fiveRandomNums.map((number) =>
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${number}/comments`)
    .then((response) => response.data)
);

Promise.all(posts).then((posts) => {
  return Promise.all(comments).then((comments) => {
    return posts.reduce((acc, post, index) => {
      const finalObject = {
        entry: {
          title: post.title,
          body: post.body,
        },
      };
      const formattedCommentsArray = comments[index].reduce((acc2, comment) => {
        const commentObj = {
            name: comment.name,
            email: comment.email,
            body: comment.body,
          }
        return [...acc2, commentObj]
      }, []);
      finalObject["comments"] = formattedCommentsArray; 
      return [...acc, finalObject]
    }, []);
  });
}).then(finalResult => console.dir(finalResult, {depth: null}));
