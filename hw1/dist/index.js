"use strict";
console.log("TASK 1");
function greetUser(username) {
    console.log(`Привет, ${username}!`);
}
greetUser('John');
console.log("TASK 2");
function printPersonInfo(person) {
    let text = "";
    for (let key in person) {
        const typeKey = key;
        text += `${typeKey}: ${person[typeKey]}, `;
    }
    text = text.split(", ").filter(Boolean).join(", ");
    console.log(text);
}
printPersonInfo({ name: "Boba", age: 22, city: "Berlin" });
console.log("TASK 3");
function squareNumber(num) {
    return Math.pow(num, 2);
}
console.log(squareNumber(25));
console.log("TASK 4");
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(25));
console.log(isEven(24));
console.log("TASK 5");
function printStudentInfo(student) {
    console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}
printStudentInfo({ name: "John", grade: 97 });
console.log("TASK 6");
function logMessage(str) {
    console.log(str);
}
logMessage("log message");
//# sourceMappingURL=index.js.map