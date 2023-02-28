// Zad 04
const cat = { 
    name: 'Filemon', 
    age: 6 
  }

const message = `Kot ma na imię ${cat.name} i ma ${cat.age} lat.`;
console.log(message);

// Zad 05
cat.description = message;
console.log(cat.description);

// Zad 06
cat.breed = "amerykański krótkowłosy";
cat.colour = "brązowy"

cat.description += ` Jest to kot rasy ${cat.breed}, a jego sierść ma kolor ${cat.colour}.`
console.log(cat.description);