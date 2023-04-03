const ships = require('./ships.js').shipsArray;

const shipsByCrewMember = ships.reduce( (acc, currentShip) => {
    currentShip.crew.reduce( (accCrew, currentCrewMem) => {
        if (currentCrewMem in acc) {
            acc[currentCrewMem] = [...acc[currentCrewMem], currentShip];
            return;
        } else {
            acc[currentCrewMem] = [currentShip];
            return;
        }
    }, null); // dodawanie kluczów(imion) do głównego acc
    return acc;
}, {});

const result = Object.keys(shipsByCrewMember).reduce( (acc, currentPerson) => {
    const shipsListString = shipsByCrewMember[currentPerson].reduce( (accList, currentPersonsShip, index) => {
        return `${accList}${index+1}. ${currentPersonsShip.model}, manufacturer: ${currentPersonsShip.manufacturer}\n`;
    }, '');
    return `${acc}${currentPerson}\n${shipsListString}\n`;
}, '');

// console.dir(shipsByCrewMember, { depth: null });
console.log(result);
