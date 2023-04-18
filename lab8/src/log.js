class Log {
    history = [];
    write(...args){
        const returnValue = args.join("");
        this.history.push(returnValue)
        return returnValue;
    }
    printHistory(range = [0,0]){
        if (range[0] === 0 && range[1] === 0) {
            return this.history.join("\n");
        } else if (range[0] <= range[1] && range[0] > 0 && range[1] > 0 && range[1] <= this.history.length()) {
            return this.history.slice(range[0]-1, range[1]).join("\n");
        } else {
            return "błąd"
        }
    }
    clearHistory(){
        this.history = [];
    }
}

const instancjaLog = new Log();
console.log(instancjaLog.write("test: ", () => {
    return "komunikat";
  }));

  console.log(instancjaLog.write("test222"));
  console.log(instancjaLog.write("test333"));
  console.log(instancjaLog.write("test444"));

  console.log("\n\n\n");

console.log(instancjaLog.printHistory());
instancjaLog.clearHistory();
console.log(instancjaLog.printHistory());
