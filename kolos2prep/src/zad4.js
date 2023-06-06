const axios = require("axios");

class AccountService {
  authenticated = false;

  idUser = Math.floor(Math.random() * 10);

  user = null;

  constructor() {}

  // Pobieranie liczby sekund, po jakiej użytkownik powinien zostać zalogowany
  getRandomLoginTime() {
    return (Math.floor(Math.random() * 10) % 5) + 5;
  }

  isAuthorized() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.authenticated);
      }, 1000);
    });
  }

  checkIsUserLogin() {
    return new Promise((resolve, reject) => {
      const checkInterval = setInterval(() => {
        this.isAuthorized().then((result) => {
          if (result) {
            console.log("Użytkownik jest zalogowany");
            clearInterval(checkInterval)
            resolve(true);
          } else {
            console.log("Użytkownik nie jest zalogowany");
          }
        });
      }, 1000);
    });
  }

  loginUser() {
    setTimeout(() => {
      this.authenticated = true;
      console.log("Użytkownik został zalogowany");
    }, this.getRandomLoginTime() * 1000);
  }

  getUserDetails() {
    return this.checkIsUserLogin().then((resolve) =>
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${this.idUser}`)
        .then((response) => response.data)
    );
  }

  getData() {
    this.getUserDetails().then((userDetails) => {
      const allPosts = axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.data);
      const onlyUserPosts = allPosts.then((postsArray) =>
        postsArray.filter((post) => post["userId"] === this.idUser)
      );
      const userPostsComments = onlyUserPosts.then((posts) =>
        posts.map((post) =>
          axios
            .get(`https://jsonplaceholder.typicode.com/posts/${post["id"]}/comments`)
            .then((response) => response.data)
        )
      );
      userPostsComments.then((arrayOfCommentPromises) => {
        Promise.all(arrayOfCommentPromises).then((comments) => {
          console.log(`Pobrano wpisy i komentarze użytkownika: ${userDetails["name"]}`);
        });
      });
    });
  }

  start() {
    this.loginUser();
    this.getData();
  }
}

const user = new AccountService();
user.start();
