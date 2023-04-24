class Shop {
    constructor(item, menu) {
        this.item = item;
        this.menu = menu;
    }
    orders = [];
    addOrder(orderName){
        if (this.menu.some( x => x.item === orderName)) {
            this.orders.push(orderName);
            return "Order added!"
        } else {
            return "This item is currently unavailable!"
        }
    }
    fulfillOrder(){
        if (this.orders.length > 0) {
            const fulfilledOrder = this.orders.shift();
            return `The ${fulfilledOrder} is ready!`
        } else {
            return "All orders have been fulfilled!"
        }
    }
    listOrders(){
        return this.orders
    }
    dueAmount(){
        return this.orders.reduce( (acc, value) => {
            return acc + this.getItemPrice(value) 
        }, 0)
    }
    cheapestItem(){
        return this.menu.reduce( (acc, value) => {
            if (acc === "" || value.price < this.getItemPrice(acc)) {
                return value.item;
            } else {
                return acc;
            }
        }, "")
    }
    drinksOnly(){
        return this.menu.filter( item => item.type === 'drink').map(x => x.item)
    }
    foodOnly(){
        return this.menu.filter( item => item.type === 'food').map(x => x.item)
    }
    getItemPrice(itemName) {
        return this.menu.find(x => x.item === itemName).price
    }
}

const coffeeShop = new Shop('myCoffeeShop1', [
    {item: "espresso", type: 'drink', price: 9},
    {item: "cappuccino", type: 'drink', price: 14},
    {item: "sernik", type: 'food', price: 18},
    {item: "latte", type: 'drink', price: 16},
    {item: "szarlotka", type: 'food', price: 15},
    {item: "ciasto czekoladowe", type: 'food', price: 16},
    {item: "flat white", type: 'drink', price: 15}
]);

coffeeShop.addOrder("latte");
coffeeShop.addOrder("sernik");
coffeeShop.addOrder("espresso");
console.log(coffeeShop.listOrders());
console.log(coffeeShop.drinksOnly());
console.log(coffeeShop.foodOnly());

console.log(coffeeShop.dueAmount());

console.log(coffeeShop.fulfillOrder());

console.log(coffeeShop.listOrders());

console.log(coffeeShop.cheapestItem());

console.log("---------------------------------------\n---------------------------------------\n\n");

const obj = new Shop('Shop1',
[
  { item: "cinnamon roll", type: "food", price: 4.99 },
  { item: "hot chocolate", type: "drink", price: 2.99 },
  { item: "lemon tea", type: "drink", price: 2.50 }
]
);



console.log(obj.addOrder("espresso")); // "This item is currently unavailable!" (Sklep nie sprzedaje espresso)

console.log(obj.addOrder("hot chocolate")); // "Order added!"
console.log(obj.addOrder("cinnamon roll")); // "Order added!"

console.log(obj.listOrders()); // ["hot chocolate", "cinnamon roll"]

console.log(obj.dueAmount()); // 7.98 (suma cen za hot chocolate i cinnamon roll)

console.log(obj.fulfillOrder()); // "The hot chocolate is ready!"
console.log(obj.fulfillOrder()); // "The cinnamon roll is ready!"
console.log(obj.fulfillOrder()); // "All orders have been fulfilled!" (Wszystkie zamówienia zostały zrealizowane)

console.log(obj.listOrders()); // []

console.log(obj.dueAmount()); // 0.0

console.log(obj.cheapestItem()); // "lemon tea"
console.log(obj.drinksOnly()); // ["hot chocolate", "lemon tea"]
console.log(obj.foodOnly()); // ["cinnamon roll"]