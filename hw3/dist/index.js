"use strict";
console.log("TASK1");
console.log("TASK2");
const car1 = {
    make: "Toyota",
    model: "Camry",
    engine: {
        type: "V6",
        horsepower: 301,
    },
    year: 2022,
};
function printInfoCar(car) {
    for (let key in car) {
        const value = car[key];
        if (typeof value === "object" && value !== null) {
            console.log(`${key}:`);
            for (let subkey in value) {
                console.log(`  ${subkey}: ${value[subkey]}`);
            }
        }
        else {
            console.log(`${key}: ${value}`);
        }
    }
}
printInfoCar(car1);
// function printObject(obj: object): void {
//   for (let key in obj) {
//     const value = (obj as any)[key];
//     if (typeof value === "object" && value !== null) {
//       console.log(`${key}:`);
//       printObject(value);
//     } else {
//       console.log(`${key}: ${value}`);
//     }
//   }
// }
console.log("TASK3");
const calculateDiscount = (product, discount) => {
    return product.price - (product.price * discount) / 100;
};
console.log(calculateDiscount({ name: "TV", price: 100 }, 5));
console.log("TASK4");
const employees = [
    { name: "Alice", salary: 5000 },
    { name: "Bob", salary: 4000 },
    { name: "Charlie", salary: 4500 },
];
function getSalary(arr) {
    return arr.map((employee) => employee.salary);
}
console.log(getSalary(employees));
console.log("TASK5");
const student = {
    firstName: "Alik",
    lastName: "Bobik",
    grade: 78,
};
function getStudentInfo(student) {
    console.log(`${student.lastName} ${student.firstName}: ${student.grade}`);
}
getStudentInfo(student);
console.log("TASK6");
const concatStrings = (str1, str2) => {
    return `${str1} ${str2}`;
};
console.log(concatStrings(student.firstName, student.lastName));
//# sourceMappingURL=index.js.map