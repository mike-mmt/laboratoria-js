function runFunc() {
    console.log("1");
}
function runFunc2() {
console.log("2");
}
const status = '';
switch(status) {
    case 'Completed':
      runFunc();
      break;
    case 'Running':
      runFunc2();
      break;
    default:
        break;
  }

console.log("asd");