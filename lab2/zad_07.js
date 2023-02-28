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

let age_sum = 0;
for (let i = 0; i < people.length; i++) {
    const element = people[i];
    age_sum += element.age;
}
console.log(`Łączna suma wieku: ${age_sum}`);
console.log(`Średnia wieku: ${age_sum/people.length}`);