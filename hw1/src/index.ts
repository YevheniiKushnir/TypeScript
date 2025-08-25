console.log("TASK 1");

function greetUser(username: string): void {
  console.log(`Привет, ${username}!`);
}

greetUser("John");

console.log("TASK 2");

interface Person {
  name: string;
  age: number;
  city: string;
}

function printPersonInfo(person: Person): void {
  let text = "";
  for (let key in person) {
    const typeKey = key as keyof Person;
    text += `${typeKey}: ${person[typeKey]}, `;
  }

  text = text.split(", ").filter(Boolean).join(", ");

  console.log(text);
}

printPersonInfo({ name: "Boba", age: 22, city: "Berlin" });

console.log("TASK 3");

function squareNumber(num: number) {
  return Math.pow(num, 2);
}

console.log(squareNumber(25));

console.log("TASK 4");

function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(isEven(25));
console.log(isEven(24));

console.log("TASK 5");

interface Student {
  name: string;
  grade: number;
}

function printStudentInfo(student: Student): void {
  console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}

printStudentInfo({ name: "John", grade: 97 });

console.log("TASK 6");

function logMessage(str: string): void {
  console.log(str);
}

logMessage("log message");
