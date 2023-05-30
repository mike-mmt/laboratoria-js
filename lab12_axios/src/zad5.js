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
        return new Promise((resolve, reject) => {
            if (this.position instanceof Vector2 && enemyShip.position instanceof Vector2) {
                resolve(this.position.diff(enemyShip.position));
            } else {
                reject("Can't determine the distance between ships");
            }
        });
    }

    checkHealth() {
        return new Promise((resolve, reject) => {
            if (this.health <= 0) {
                // console.log("The ship has been destroyed!");
                reject("The ship has been destroyed!");
            } else {
                resolve(this.health);
            }
        });
    }

    getDamage(amount) {
        // console.log(`The ship has taken damage: ${amount} health points`);
        return new Promise((resolve, reject) => {
            this.checkHealth()
                .then(() => {
                    this.health -= amount;
                    resolve(`Damaged for ${amount}`);
                }).catch((err) => {
                    console.log(err);
                    reject("The ship has already been destroyed!");
                });
        });
    }

    makeDamage(enemyShip) {
        this.getDistance(enemyShip)
            .then(() => {
                return enemyShip.getDamage(this.strength);
            })
            .then(() => {
                console.log(`Damaged enemy ship for ${this.strength} points`);
                enemyShip.checkHealth().catch(err => console.log(err));
                })
            .catch((err) => {
                        console.log(err);
                    })
            .catch((err) => {
                console.log(err);
            });

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

    // fireDeathRay(enemyShip) {
    //     enemyShip.getDamage(999999999);
    // }
    makeDamage(enemyShip) {
        return new Promise((resolve, reject) => {
            if (this.deathRayAvailable === true) {
                super.makeDamage(enemyShip);
                this.deathRayAvailable = false;
                setTimeout(() => {
                    this.prepareDeathRay();
                }, 10000);
                resolve();
            } else {
                reject("Death Ray is not available");
            }
        });
    }
}

const gwiazdaSmierci = new DeathStar(new Vector2(3, 7), 10, 20);
const statekRebeli = new RebelShip(new Vector2(5, 6), 5, 8);
// gwiazdaSmierci.makeDamage(statekRebeli);
// // Statek Rebelii otrzymał obrażenia równe: 10
// // Statek Rebelii został zniszczony

gwiazdaSmierci.prepareDeathRay();

gwiazdaSmierci.makeDamage(statekRebeli);
// Statek Rebelii otrzymał obrażenia równe: 10
// Statek Rebelii został zniszczony

gwiazdaSmierci.makeDamage(statekRebeli).catch(error => console.log(error));
// Promień gwiazdy śmierci jest niedostepny