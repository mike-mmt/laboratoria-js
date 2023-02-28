obj = {
    firstName: "Adam",
    lastName: "Nowak",
    age: 20
}

const desc = `Osoba: ${obj.firstName} ${obj.lastName}`;

console.log(desc);

obj.age = 21;
obj.description = desc;
console.log(obj);

obj?.lenght

const a = [1,2];
const b = [2,3];

const c = [...a, ...b];
console.log(c);

const text = 'tekst';
console.log(text, [...text]);