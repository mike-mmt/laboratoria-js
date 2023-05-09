class Tile {
    type = null;

    x = null;

    y = null;

    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        const types = ["LAND", "WATER", "ICE"];
        if (types.includes(type)) {
            this.type = type;
        } else {
            throw Error;
        }
    }

    getTileInfo(){
        return `${this.x}, ${this.y} ${this.type}`;
    }
  }

class Grid {
    height = null; // liczba całkowita

    width = null; // liczba całkowita

    grid = null; // tablica dwuwymiarowa

    ships = []; // tablica jednowymiarowa

    itemType(){
        const types = ["LAND", "WATER", "ICE"];
        return types[Math.floor(Math.random() * types.length)];
    }

    generate(height, width){
        this.height = height;
        this.width = width;
        this.grid = Array(height).fill(Array(width).fill(0));
        // this.grid.forEach( (row, y) => {
        //     row.forEach( (_, x) => { this.grid[x][y] = new Tile(x, y, this.itemType())
        //     });
        // });

        this.grid = this.grid.map(
            (row, y) => row.map(
                (_, x) => new Tile(x, y, this.itemType())
                )
            );
        // this.grid = Array(height).fill(Array(width).fill(new Tile()));
        // for (let y = 0; y < this.height; y++) {
        //     const row = [];
        //     for (let x = 0; x < this.width; x++) {
        //         const newTile = new Tile(x, y, this.itemType());
        //         row.push(newTile);
        //     }
        //     this.grid.push(row);
        // }
    }

    generatePredefined(height, width, predefinedTiles){
        this.generate(height, width);
        predefinedTiles.forEach(element => {
            this.grid[element.y][element.x] = element;
        });
    }

    getTileAt(x, y) {
        return this.grid.find( row => row.some( tile => (tile.x === x && tile.y === y))).find(tile => (tile.x === x && tile.y === y));
    }

    isShipAt(x, y) {
        return this.ships.some( ship => (ship.x === x && ship.y === y) );
    }

    getShipAt(x, y) {
        return this.ships.find( ship => (ship.x === x && ship.y === y) );
    }

    printGrid() {
        return '  ' + this.grid.reduce( (acc, _, index) => {
            return acc + index.toString() + ' ';
        }, "") + '\n' + this.grid.reduce( (acc, row, rowIndex) => {
            return acc + rowIndex.toString() + ' ' + row.reduce( (acc2, tile) => {
                if (this.isShipAt(tile.x, tile.y)) {
                    return acc2 + this.getShipAt(tile.x, tile.y).direction + ' ';
                } else {
                    switch (tile.type) {
                        case 'WATER':
                            return acc2 + '~ ';
                        case 'ICE':
                            return acc2 + 'x ';
                        case 'LAND':
                            return acc2 + 'o ';
                        default:
                            break;
                    }
                }
            }, "") + '\n';
        }, "");
    }
}

class Ship {
    direction = null; // string

    x = null; // liczba całkowita

    y = null; // liczba całkowita

    grid = null; // obiekt klasy Grid

    constructor(x, y, direction, grid){
        this.grid = grid;
        if (grid.getTileAt(x, y).type === 'WATER') {
            this.direction = direction;
            this.x = x;
            this.y = y;
            this.grid.ships;
            this.grid.ships.push(this);
        } else {
            console.log("Can't place ship");
        }
    }

    turn(turnDir){
        const dirs = ['N', 'E', 'S', 'W'];
        if (turnDir.toLowerCase() === 'p') {
            this.direction = dirs[ (dirs.findIndex(x => x === this.direction) + 1) % dirs.length];
        } else if (turnDir.toLowerCase() === 'l') {
            this.direction = dirs[ (dirs.findIndex(x => x === this.direction) - 1 + dirs.length) % dirs.length];
        }
    }

    sail(){
        switch (this.direction) {
            case 'N': {
                const nextTileType = this.grid.getTileAt(this.x, this.y - 1).type;
                if (this.y - 1 > 0) {
                    if (nextTileType === 'WATER') {
                        if (!this.grid.isShipAt(this.x, this.y - 1)) {
                            this.y -= 1;
                            console.log('sailed north');
                        } else console.log("Can't sail. Ship ahead");
                    } else console.log("Can't sail. Land or ice ahead");
                } else console.log("Can't sail. Edge of the world ahead");
                break;
            }

            case 'W': {
                const nextTileType = this.grid.getTileAt(this.x - 1, this.y).type;
                if (this.x - 1 > 0) {
                    if (nextTileType === 'WATER') {
                        if (!this.grid.isShipAt(this.x - 1, this.y)) {
                            this.x -= 1;
                            console.log('sailed west');
                        } else console.log("Can't sail. Ship ahead");
                    } else console.log("Can't sail. Land or ice ahead");
                } else console.log("Can't sail. Edge of the world ahead");
                break;
            }
            case 'S': {
                const nextTileType = this.grid.getTileAt(this.x, this.y + 1).type;
                if (this.y + 1 > 0) {
                    if (nextTileType === 'WATER') {
                        if (!this.grid.isShipAt(this.x, this.y + 1)) {
                            this.y += 1;
                            console.log('sailed south');
                        } else console.log("Can't sail. Ship ahead");
                    } else console.log("Can't sail. Land or ice ahead");
                } else console.log("Can't sail. Edge of the world ahead");
                break;
            }
            case 'E': {
                const nextTileType = this.grid.getTileAt(this.x + 1, this.y).type;
                if (this.x + 1 > 0) {
                    if (nextTileType === 'WATER') {
                        if (!this.grid.isShipAt(this.x + 1, this.y)) {
                            this.x += 1;
                            console.log('sailed east');
                        } else console.log("Can't sail. Ship ahead");
                    } else console.log("Can't sail. Land or ice ahead");
                } else console.log("Can't sail. Edge of the world ahead");
                break;
            }
            default:
                break;
        }
    }

    getShipInfo() {
        return `${this.direction}, ${this.x},${this.y}`;
    }

}

class IcebreakerShip extends Ship {
    constructor(x, y, grid){
        super(x, y, 'N', grid);
    }

    turn() {
        const dirs = ['N', 'W', 'S', 'E'];
        this.direction = dirs[ (dirs.findIndex(x => x === this.direction) + 2) % dirs.length];
    }

    sail(){
        switch (this.direction) {
            case 'N': {
                const nextTileType = this.grid.getTileAt(this.x, this.y - 1).type;
                if (this.y - 1 > 0) {
                    if (nextTileType === 'WATER' || nextTileType === 'ICE') {
                        if (!this.grid.isShipAt(this.x, this.y - 1)) {
                            this.y -= 1;
                            console.log('sailed north');
                        } else console.log("Can't sail. Ship ahead");
                    } else if (nextTileType === 'LAND') {
                        super.turn('P');
                        console.log("Can't sail. Land ahead. Turning right");
                    }
                } else console.log("Can't sail. Edge of the world ahead");
                break;
            }

            case 'W': {
                const nextTileType = this.grid.getTileAt(this.x - 1, this.y).type;
                if (this.x - 1 > 0) {
                    if (nextTileType === 'WATER' || nextTileType === 'ICE') {
                        if (!this.grid.isShipAt(this.x - 1, this.y)) {
                            this.x -= 1;
                            console.log('sailed west');
                        } else console.log("Can't sail. Ship ahead");
                    } else if (this.grid.getTileAt(this.x, this.y - 1).type === 'LAND') {
                        super.turn('R');
                        console.log("Can't sail. Land ahead. Turning right");
                    }
                } else console.log("Can't sail. Edge of the world ahead");
                break;
            }
            case 'S': {
                const nextTileType = this.grid.getTileAt(this.x, this.y + 1).type;
                if (this.y + 1 > 0) {
                    if (nextTileType === 'WATER' || nextTileType === 'ICE') {
                        if (!this.grid.isShipAt(this.x, this.y + 1)) {
                            this.y += 1;
                            console.log('sailed south');
                        } else console.log("Can't sail. Ship ahead");
                    } else if (this.grid.getTileAt(this.x, this.y - 1).type === 'LAND') {
                        super.turn('R');
                        console.log("Can't sail. Land ahead. Turning right");
                    }
                } else console.log("Can't sail. Edge of the world ahead");
                break;
            }
            case 'E': {
                const nextTileType = this.grid.getTileAt(this.x + 1, this.y1).type;
                if (this.x + 1 > 0) {
                    if (nextTileType === 'WATER' || nextTileType === 'ICE') {
                        if (!this.grid.isShipAt(this.x + 1, this.y)) {
                            this.x += 1;
                            console.log('sailed east');
                        } else console.log("Can't sail. Ship ahead");
                    } else if (this.grid.getTileAt(this.x, this.y - 1).type === 'LAND') {
                        super.turn('R');
                        console.log("Can't sail. Land ahead. Turning right");
                    }
                } else console.log("Can't sail. Edge of the world ahead");
                break;
            }
            default:
                break;
        }
    }
}


const grid = new Grid();
grid.generate(10, 10); // generuje planszę o wymiarach 10 x 10
// console.dir(grid, {depth: null});
// console.log(grid.getTileAt(2, 2).getTileInfo()); // 2,2 LAND

const predefinedtiles = [
    new Tile(0, 6, 'ICE'),
    new Tile(1, 6, 'ICE'),
    new Tile(2, 6, 'ICE'),
    new Tile(3, 6, 'ICE'),
    new Tile(4, 6, 'ICE'),
    new Tile(0, 7, 'WATER'),
    new Tile(1, 7, 'WATER'),
    new Tile(2, 7, 'WATER'),
    new Tile(3, 7, 'WATER'),
    new Tile(4, 7, 'WATER'),
    new Tile(5, 7, 'WATER'),
    new Tile(6, 7, 'WATER'),
    new Tile(7, 7, 'WATER'),
    new Tile(8, 7, 'WATER'),
    new Tile(9, 7, 'WATER'),
    new Tile(0, 8, 'WATER'),
    new Tile(1, 8, 'WATER'),
    new Tile(2, 8, 'WATER'),
    new Tile(3, 8, 'WATER'),
    new Tile(4, 8, 'WATER'),
    new Tile(5, 8, 'WATER'),
    new Tile(6, 8, 'WATER'),
    new Tile(7, 8, 'WATER'),
    new Tile(8, 8, 'WATER'),
    new Tile(9, 8, 'WATER'),
    new Tile(0, 9, 'WATER'),
    new Tile(1, 9, 'WATER'),
    new Tile(2, 9, 'WATER'),
    new Tile(3, 9, 'WATER'),
    new Tile(4, 9, 'WATER'),
    new Tile(5, 9, 'WATER'),
    new Tile(6, 9, 'WATER'),
    new Tile(7, 9, 'WATER'),
    new Tile(8, 9, 'WATER'),
    new Tile(9, 9, 'WATER')
  ];

grid.generatePredefined(10, 10, predefinedtiles); // na nowo generuje planszę o wymiarach 10 x 5
// console.dir(grid, {depth: null});

const ship = new Ship(2, 9, "N", grid);
const ship2 = new Ship(4, 9, "N", grid);

console.log(grid.printGrid());

ship.turn("P"); // Statek obrócony o 90 st. w prawo

// console.log(grid.ships);

console.log(grid.printGrid());

ship2.turn("L"); // Statek obrócony o 90 st. w prawo

// console.log(ship.grid.ships);
console.log(grid.printGrid());

// console.log('\n\nsailing\n\n');
// ship2.sail();

// console.log(grid.ships);
// console.log(ship2);
// console.log(grid.printGrid());

const icebreaker = new IcebreakerShip(2, 7, grid);

console.log(grid.printGrid());
console.log(icebreaker.getShipInfo()); // "N", 3,6

icebreaker.sail(); // Statek napotkał lądolód, przedarł się przez niego

console.log(grid.printGrid());
console.log(icebreaker.getShipInfo()); // "N", 3,6

ship.sail();

console.log(grid.printGrid());

ship.sail();

console.log(grid.printGrid());

icebreaker.sail();

console.log(grid.printGrid());

icebreaker.turn();

console.log(grid.printGrid());