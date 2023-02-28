// Zadanie 7
const person1 = {
    name: "Agata",
    age: 21
}
const person2 = {
    name: "Tomasz",
    age: 25
}
const person3 = {
    name: "Alicja",
    age: 31
}
const person4 = {
    name: "Jan",
    age: 20
}
const people = [person1,person2,person3,person4];

let ageSum = 0;
for (let i = 0; i < people.length; i++) {
    const element = people[i];
    ageSum += element.age;
}
console.log(`Łączna suma wieku: ${ageSum}`);
const ageAvg = ageSum/people.length;
console.log(`Średnia wieku: ${ageAvg}`);

// Zadanie 8
const below = [];
const above = [];

for (let i = 0; i < people.length; i++) {
    const element = people[i];
    if (element.age > ageAvg) {
        above.push(element.name);
    } else if (element.age < ageAvg) {
        below.push(element.name);
    }
}

console.log(above);
console.log(below);