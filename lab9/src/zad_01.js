class Food {
    constructor(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
    }

    prepare(){
        console.log(`Preparing ${this.name}...`);
        // return `Preparing ${name}`
    }

    cook(){
        console.log(`Cooking ${this.name}...`);
        // return `Cooking ${name}`
    }

    serve(){
        console.log(`Serving ${this.name}...`);
        // return `Serving ${name}`
    }
}

class Pizza extends Food {
    constructor(name, ingredients, toppings) {
        super(name, ingredients);
        this.toppings = toppings;
    }

    mix(){
        console.log(`Mixing ${this.ingredients.join(', ')}...`);
        // return `Serving ${name}`
    }

    bake(){
        console.log(`Baking pizza in oven...`);
        // return `Serving ${name}`
    }

    serve(){
        console.log(`Serving ${this.name} with ${this.toppings.join(', ')}...`);
        // return `Serving ${name}`
    }
}

const pizza = new Pizza("Margherita", ["flour", "tomatoes", "mozzarella"], ["basil"]);

console.dir(pizza, {depth: null});

pizza.prepare();
pizza.mix();
pizza.bake();
pizza.serve();

class Salad extends Food {
    constructor(name, ingredients, dressing) {
        super(name, ingredients);
        this.dressing = dressing;
    }

    mix(){
        console.log(`Mixing ${this.ingredients.join(', ')}...`);
        // return `Serving ${name}`
    }

    serve(){
        console.log(`Serving ${this.name} with ${this.dressing}...`);
        // return `Serving ${name}`
    }
}

const salad = new Salad("Caesar", ["lettuce", "croutons", "Parmesan cheese"], "Caesar");
salad.prepare();
salad.mix();
salad.serve();