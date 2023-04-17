const _ = require('lodash');

const cashRegister = {
    '5s': 0,
    '10s': 0,
    '20s': 0
};

function checkExchange(paidArray) {
    function canGiveChange(cash) {
        switch (cash) {
            case 5:
                return true;
            case 10:
                if (cashRegister['5s'] >= 1) {
                    cashRegister['5s'] -= 1;
                    return true;
                } else {
                    return false;
                }
            case 20:
                if (cashRegister['10s'] >= 1 && cashRegister['5s'] >= 1) {
                    cashRegister['10s'] -= 1;
                    cashRegister['5s'] -= 1;
                    return true;
                } else if (cashRegister['5s'] >= 3) {
                    cashRegister['5s'] -= 3;
                    return true;
                } else {
                    return false;
                }
            default:
                break;
        }
    }
    return _.reduce(paidArray, function(acc, value){
        switch (value) {
            case 5:
                cashRegister['5s'] += 1;
                break;
            case 10:
                cashRegister['10s'] += 1;
                break;
            case 20:
                cashRegister['20s'] += 1;
                break;
            default:
                break;
        }
        return canGiveChange(value) ? acc : false;
    }, true);
}

console.log(checkExchange([5, 5, 5, 10, 20])); // => true
// checkExchange([5, 5, 10, 10, 20]); // => false
// checkExchange([10, 10]); // => false
// checkExchange([5, 5, 10]); // => true