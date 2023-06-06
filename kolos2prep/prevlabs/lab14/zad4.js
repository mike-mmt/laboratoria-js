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
      const checker = setInterval(() => {
        if (this.authenticated) {
          console.log("Użytkownik jest zalogowany");
          clearInterval(checker);
          resolve(true);
        } else {
          console.log("Użytkownik nie jest zalogowany");
        }
      }, 1000);
    });
  }

  loginUser() {
    setTimeout(() => {
      this.authenticated = true;
      console.log("Użytkownik został zalogowany");
    }, this.getRandomLoginTime()*1000);
  }

  getUserDetails() {
    return new Promise((resolve, reject) => {
      this.checkIsUserLogin().then(() => {
        axios
          .get(`https://jsonplaceholder.typicode.com/users/${this.idUser}`)
          .then((response) => response.data)
          .then((data) => {
            // this.user = data.name;
            console.log(`Zostałeś zalogowany jako: ${data.name}`);
            resolve(data);
          });
      });
    });
  }

  getData() {
    this.getUserDetails().then((data) => {
      const allPosts = axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.data);
      const userPosts = allPosts.then((posts) =>
        posts.filter((post) => post.userId === this.idUser)
      );
      const userPostsComments = userPosts
        .then((posts) => {
          return posts.map((post) => {
            axios
              .get(
                `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
              )
              .then((response) => response.data);
          });
        })
        .then(() => {
          console.log(`Pobrano wpisy i komentarze użytkownika: ${data.name}`);
        });
    });
  }

  start() {
    this.loginUser();
    this.getData();
  }
}

const newUser = new AccountService();
newUser.start();
