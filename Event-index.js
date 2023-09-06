const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine")

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("Order", (size , topping) => {
    console.log(`Order received! Baking a ${size} pizza with ${topping}`);
    drinkMachine.serveDrink(size);
})

pizzaShop.order("large", "mashrooms");
pizzaShop.displayOrderNumber(); 