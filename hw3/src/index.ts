console.log("TASK1");

type Admin = {
  name: string;
  permissions: string[];
};
type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

console.log("TASK2");

interface Car {
  make: string;
  model: string;
  engine: {
    type: string;
    horsepower: number;
  };
  year?: number;
}

const car1 = {
  make: "Toyota",
  model: "Camry",
  engine: {
    type: "V6",
    horsepower: 301,
  },
  year: 2022,
};

function printInfoCar(car: Car): void {
  for (let key in car) {
    const value = car[key as keyof Car];
    if (typeof value === "object" && value !== null) {
      console.log(`${key}:`);
      for (let subkey in value) {
        console.log(`  ${subkey}: ${value[subkey as keyof typeof value]}`);
      }
    } else {
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

interface Product {
  name: string;
  price: number;
}
interface CalculateDiscount {
  (obj: Product, discount: number): number;
}

const calculateDiscount: CalculateDiscount = (product, discount) => {
  return product.price - (product.price * discount) / 100;
};

console.log(calculateDiscount({ name: "TV", price: 100 }, 5));

console.log("TASK4");

interface Employee {
  name: string;
  salary: number;
}
type Employees = Employee[];

const employees: Employees = [
  { name: "Alice", salary: 5000 },
  { name: "Bob", salary: 4000 },
  { name: "Charlie", salary: 4500 },
];

function getSalary(arr: Employees): number[] {
  return arr.map((employee) => employee.salary);
}

console.log(getSalary(employees));

console.log("TASK5");

interface Person {
  firstName: string;
  lastName: string;
}
interface Student extends Person {
  grade: number;
}

const student: Student = {
  firstName: "Alik",
  lastName: "Bobik",
  grade: 78,
};

function getStudentInfo(student: Student): void {
  console.log(`${student.lastName} ${student.firstName}: ${student.grade}`);
}

getStudentInfo(student);

console.log("TASK6");

interface ConcatStrings {
  (str1: string, str2: string): string;
}

const concatStrings: ConcatStrings = (str1, str2) => {
  return `${str1} ${str2}`;
};

console.log(concatStrings(student.firstName, student.lastName));
