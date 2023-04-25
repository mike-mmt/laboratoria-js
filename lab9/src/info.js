class Person {
    // firstName = 'Adam';
    city = 'Gdańsk';

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    print(){
        console.log(this.name + ' wiek: ' + this.age);
    }
}

class Child extends Person {
    play(){
        console.log('asd');
    }
}

const person1 = new Person('Adam', 20);
const person2 = new Person('Jan', 21);

console.log(person1, person2);
person1.print();