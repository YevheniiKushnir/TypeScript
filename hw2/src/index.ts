console.log("TASK 1");

function calculateTotal(
  price: number,
  quantity: number,
  discount: number = 0
): number {
  if (price <= 0 || quantity <= 0) {
    return 0;
  }

  return price * quantity - discount;
}

console.log(calculateTotal(100, 2));
console.log(calculateTotal(100, 2, 20));
console.log(calculateTotal(0, 5, 10));

console.log("TASK 2");

type ID = string | number;

function displayId(id: ID): string | number {
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

interface Order {
  orderId: string;
  amount: number;
  status: "pending" | "shipped" | "delivered";
}

type Orders = Order[];

const orders: Orders = [
  { orderId: "A001", amount: 100, status: "pending" },
  { orderId: "A002", amount: 200, status: "shipped" },
  { orderId: "A003", amount: 150, status: "delivered" },
  { orderId: "A004", amount: 50, status: "pending" },
];

function filterOrdersByStatus(
  orders: Orders,
  status: Order["status"]
): Order[] {
  return orders.filter((order) => order.status === status);
}

console.log(filterOrdersByStatus(orders, "pending"));
console.log(filterOrdersByStatus(orders, "shipped"));

console.log("TASK 4");

type productInfo = [productName: string, price: number, inStore: number];
interface Inventory {
  [productName: string]: number;
}

const product1: productInfo = ["TV", 380, 12];
const product2: productInfo = ["SmartWatch", 380, 12];
let inventory: Inventory = {
  TV: 5,
  Laptop: 3,
};

function updateStock(inventory: Inventory, product: productInfo) {
  const [productName, , inStore] = product;
  inventory[productName] = (inventory[productName] || 0) + inStore;
  return inventory;
}

console.log("Before: ", inventory);
console.log("After: ", updateStock(inventory, product1));
console.log("Before: ", inventory);
console.log("After: ", updateStock(inventory, product2));
