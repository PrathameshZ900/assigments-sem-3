// # Problem 2

// ### **Products Cart Object**

// - Given an input of products in the below format (Name Quantity Price)
// - Input

// ```
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// ```

// - Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// - Sample output for the above case `290`


const productsCart = {
    data: [],
    addProduct: function(name, quantity, price) {
        this.data.push({ name, quantity, price });
    },
    total: function() {
        let totalPrice = 0;
        this.data.forEach(product => {
            totalPrice += product.quantity * product.price;
        });
        return totalPrice;
    }
};

// Input
const names = ["Rice", "Dal", "Salt"];
const quantities = [2, 3, 1];
const prices = [60, 50, 20];

// Adding products to the cart
for (let i = 0; i < names.length; i++) {
    productsCart.addProduct(names[i], quantities[i], prices[i]);
}

// Calculating total
const totalPrice = productsCart.total();
console.log("Total Price:", totalPrice); // Output: 290
