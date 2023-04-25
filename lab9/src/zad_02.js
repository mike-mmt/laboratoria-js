class Tile {
    type = null;

    x = null;

    y = null;

    types = ["LAND", "WATER", "ICE"];

    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        if (this.types.includes(type)) {
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

    ships = null; // tablica jednowymiarowa

    types = ["LAND", "WATER", "ICE"];

    itemType(){
        return this.types[Math.floor(Math.random() * this.types.length)];
    }

    generate(height, width){
        this.height = height;
        this.width = width;
        this.grid = Array(height).fill(Array(width).fill(undefined));
        this.grid.forEach( (row, y) => { //////////// !!!!!!!!!!!!!!!!!!!!!!!! niedokonczone
            row.map( (tile, x) => new Tile(x, y, this.itemType()));
        });
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
        this.grid = [predefinedTiles]
    }

    // getTileAt(x, y) {
    //     return this.grid.find( row => row.some( tile => (tile.x === x && tile.y === y))).find(tile => (tile.x === x && tile.y === y));
    // }
}

class Ship {
    direction = null; // string

    x = null; // liczba całkowita

    y = null; // liczba całkowita

    grid = null; // obiekt klasy Grid
}


const grid = new Grid();
grid.generate(10, 10); // generuje planszę o wymiarach 10 x 10
console.dir(grid, {depth: null});
// console.log(grid.getTileAt(2, 2).getTileInfo()); // 2,2 LAND
grid.generate(10, 5); // na nowo generuje planszę o wymiarach 10 x 5
