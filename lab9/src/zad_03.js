class Creature {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    energy = 5;

    mood = 'relaxed';

    limitNumber(num, min, max){
        return num < min ? min : num > max ? max : num;
    }

    eat(){
        this.energy = this.limitNumber(this.energy+2, 0, 10);
        this.mood = 'good';

        console.log(`${this.name} is eating`);
    }

    drink(){
        this.energy = this.limitNumber(this.energy+1, 0, 10);

        console.log(`${this.name} is drinking`);
    }

    sleep(){
        this.energy = this.limitNumber(this.energy+5, 0, 10);
        this.mood = 'good';

        console.log(`${this.name} is sleeping`);
    }
}

class Animal extends Creature {
    constructor(name, age, gender, type) {
        super(name, age, gender);
        this.type = type;
    }

    run() {
        if (this.energy >= 3) {
            this.energy = this.limitNumber(this.energy-3, 0, 10);
            this.mood = 'happy';
            console.log(`${this.name} is running around`);
        } else {
            console.log(`${this.name} is too tired to run`);
        }
    }
}

class Person extends Creature {
    constructor(name, age, gender){
        super(name, age, gender);
    }

    rest(){
        this.mood = 'relaxed';
        this.energy = this.limitNumber(this.energy+2, 0, 10);
        console.log(`${this.name} is resting`);
    }
}

class Adult extends Person {
    constructor(name, age, gender){
        super(name, age, gender);
    }

    work(){
        if(this.energy > 0) {
            this.energy -= 1;
            this.mood = 'tired';
            console.log(`${this.name} is going to work`);
        } else {
            console.log(`${this.name} is too tired to work`);
        }
    }

    cook(){
        console.log(`${this.name} is cooking`);
    }
}

class Child extends Person {
    constructor(name, age, gender){
        super(name, age, gender);
    }

    happiness = 5;

    learn(){
        if(this.energy > 0) {
            this.energy -= 1;
            console.log(`${this.name} is learning something new`);
        } else {
            console.log(`${this.name} is too tired to learn`);
        }
    }

    play(){
        if (this.energy >= 3) {
            this.happiness = this.limitNumber(this.happiness+4, 0, 10);
            this.energy = this.limitNumber(this.energy-3, 0, 10);
            this.mood = 'happy';
            console.log(`${this.name} is playing`);
        } else {
            console.log(`${this.name} is too tired to play`);
        }
    }


}

const child1 = new Child('Maciek', 7, 'male');
const animal1 = new Animal('Cerber', 9, 'male');
const adult1 = new Adult('Amelia', 23, 'female');

child1.learn();
child1.sleep();
child1.eat();
child1.play();

adult1.work();
adult1.cook();
adult1.eat();
adult1.rest();

animal1.drink();
animal1.run();
animal1.drink();
animal1.sleep();