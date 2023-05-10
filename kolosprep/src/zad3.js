class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    diff(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }

    multiplyBy(number) {
        this.x *= number;
        this.y *= number;
    }

    toString() {
        return `x: ${this.x} y: ${this.y}`;
    }
}

const vector1 = new Vector2(10, 10);
const vector2 = new Vector2(5, 10);

console.log(vector1.toString()); // x: 10 y: 10

vector1.diff(vector2);
console.log(vector1.toString()); // x: 5 y: 0

vector1.multiplyBy(2);
console.log(vector1.toString()); // x: 10 y: 0

class Ship {
    constructor(faction, position, strength, health) {
        this.faction = faction;
        this.position = position;
        this.strength = strength;
        this.health = health;
    }

    getDistance(enemyShip) {
        if (this.position instanceof Vector2 && enemyShip.position instanceof Vector2) {
            return this.position.diff(enemyShip.position);
        } else {
            console.log("Can't determine the distance between ships");
            return;
        }
    }

    checkHealth() {
        if (this.health <= 0) {
            console.log("The ship has been destroyed!");
        }
    }

    getDamage(amount) {
        this.health -= amount;
        console.log(`The ship has taken damage: ${amount} health points`);
        this.checkHealth();
    }

    makeDamage(enemyShip) {
        enemyShip.getDamage(this.strength);
    }
}

class RebelShip extends Ship {
    constructor(position, strength, health) {
        super('Rebel Alliance', position, strength, health);
    }

    hyperspeed() {
        console.log("Ship entering hyperspeed");
        this.position = undefined;
    }
}

class DeathStar extends Ship {
    constructor(position, strength, health) {
        super("Empire", position, strength, health);
    }

    deathRayAvailable = false;

    prepareDeathRay() {
        this.deathRayAvailable = true;
        console.log("The Death Ray is ready to fire!");
    }

    fireDeathRay(enemyShip) {
        enemyShip.getDamage(999999999);
    }
}

const gwiazdaSmierci = new DeathStar(new Vector2(3, 7), 10, 20);
const statekRebeli = new RebelShip(new Vector2(5, 6), 5, 8);
gwiazdaSmierci.makeDamage(statekRebeli);
// Statek Rebelii otrzymał obrażenia równe: 10
// Statek Rebelii został zniszczony