"use strict";
console.log("TASK 4");
async function promiseNumber(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Промис ${num} завершён`);
            resolve(num);
        }, num);
    });
}
async function result(arr) {
    const promises = arr.map((num) => promiseNumber(num));
    const results = await Promise.all(promises);
    console.log("Все результаты:", results);
    return results;
}
result([1, 2, 3, 4, 5]);
//# sourceMappingURL=task4.js.map