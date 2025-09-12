import getRandomDelay from "./getRandomDelay.js";
console.log("TASK 1");
const funcArray = [];
(() => {
    let count = 5;
    while (count > 0) {
        const taskNumber = count;
        funcArray.push(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(`Задача ${taskNumber} выполнена`);
                    resolve(taskNumber);
                }, getRandomDelay());
            });
        });
        count--;
    }
})();
(async () => {
    for (let func of funcArray) {
        const result = await func();
        console.log("Результат:", result);
    }
    console.log("Все задачи завершены последовательно");
})();
//# sourceMappingURL=task1.js.map