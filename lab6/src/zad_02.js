const ships = require('./ships.js').shipsArray;

const result = ships.reduce( (acc, currentShip) => {
    if (currentShip.destroyed === true) {
        return acc;
    } else {
        if (currentShip.manufacturer in acc) {
            const newShip = {};
            newShip[currentShip.model] = {
                height: currentShip.height,
                maximumSpeed: currentShip.maximumSpeed
            };
            acc[currentShip.manufacturer].push(newShip);
            return acc;
        } else {
            const newlistOfShips = [];
            const newShip = {};
            newShip[currentShip.model] = {
                height: currentShip.height,
                maximumSpeed: currentShip.maximumSpeed
            };
            newlistOfShips.push(newShip);
            acc[currentShip.manufacturer] = newlistOfShips;
            return acc;
        }
    }
}, {});

console.dir(result, { depth: null });