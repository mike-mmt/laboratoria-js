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
        setTimeout(() => {
            return this.authenticated;
        }, 1000);
    }

    checkIsUserLogin() {
        const checkInterval = setInterval(() => {
            this.isAuthorized().then((result) => {
                if (result) {
                    console.log("Użytkownik jest zalogowany");
                } else {
                    console.log("Użytkownik nie jest zalogowany");
                }
            })
        }, 1000);
    }

    loginUser() {
        setTimeout(() => {
            this.authenticated = true;
            console.log("Użytkownik został zalogowany");
        }, this.getRandomLoginTime);
    }

    getUserDetails() {
        
    }
  }