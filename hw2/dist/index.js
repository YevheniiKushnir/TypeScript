"use strict";
console.log("TASK 1");
function calculateTotal(price, quantity, discount = 0) {
    if (price <= 0 || quantity <= 0) {
        return 0;
    }
    return price * quantity - discount;
}
console.log(calculateTotal(100, 2));
console.log(calculateTotal(100, 2, 20));
console.log(calculateTotal(0, 5, 10));
console.log("TASK 2");
function displayId(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    if (typeof id === "number") {
        return id * 10;
    }
    throw new Error("Invalid typeof");
}
console.log(displayId("asdasdasd"));
console.log(displayId(12));
console.log("TASK 3");
const orders = [
    { orderId: "A001", amount: 100, status: "pending" },
    { orderId: "A002", amount: 200, status: "shipped" },
    { orderId: "A003", amount: 150, status: "delivered" },
    { orderId: "A004", amount: 50, status: "pending" },
];
function filterOrdersByStatus(orders, status) {
    return orders.filter((order) => order.status === status);
}
console.log(filterOrdersByStatus(orders, "pending"));
console.log(filterOrdersByStatus(orders, "shipped"));
console.log("TASK 4");
const product1 = ["TV", 380, 12];
const product2 = ["SmartWatch", 380, 12];
let inventory = {
    TV: 5,
    Laptop: 3,
};
function updateStock(inventory, product) {
    const [productName, , inStore] = product;
    inventory[productName] = (inventory[productName] || 0) + inStore;
    return inventory;
}
console.log("Before: ", inventory);
console.log("After: ", updateStock(inventory, product1));
console.log("Before: ", inventory);
console.log("After: ", updateStock(inventory, product2));
//# sourceMappingURL=index.js.map