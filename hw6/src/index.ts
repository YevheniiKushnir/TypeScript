console.log("TASK 1");

abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}
class Cat extends Animal {
  makeSound(): void {
    console.log("Meow");
  }
}

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach((elem) => elem.makeSound());

console.log("TASK 2");

abstract class Shape {
  abstract name: string;
  abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  name = "Circle";

  constructor(public color: string, private radius: number) {
    super();
  }
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class ColoredRectangle extends ColoredShape {
  name = "Rectangle";

  constructor(
    public color: string,
    private weight: number,
    private height: number
  ) {
    super();
  }
  calculateArea(): number {
    return this.weight * this.height;
  }
}

const circle = new ColoredCircle("red", 12);
const rectangle = new ColoredRectangle("green", 12, 12);

console.log(`Circle:\ncolor: ${circle.color} area: ${circle.calculateArea()}`);
console.log(
  `Rectangle:\ncolor: ${rectangle.color} area: ${rectangle.calculateArea()}`
);

console.log("TASK 3");

abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  turnOn() {
    console.log(`WashingMachine turn on`);
  }
  turnOff() {
    console.log(`WashingMachine turn off`);
  }
}
class Refrigerator extends Appliance {
  turnOn() {
    console.log(`Refrigerator turn on`);
  }
  turnOff() {
    console.log(`Refrigerator turn off`);
  }
}

const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];

appliances.forEach((item) => {
  item.turnOn();
  item.turnOff();
});

console.log("TASK 4");

abstract class Account {
  protected balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  constructor(initialBalance: number, private interestRate: number) {
    super(initialBalance);
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this.balance += amount;
    console.log(`Deposited ${amount}, new balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount <= 0) throw new Error("Withdraw must be positive");
    if (amount > this.balance) throw new Error("Insufficient funds");
    this.balance -= amount;
    console.log(`Withdrew ${amount}, new balance: ${this.balance}`);
  }

  addInterest(): void {
    const interest = this.balance * this.interestRate;
    this.balance += interest;
    console.log(`Interest added: ${interest}, new balance: ${this.balance}`);
  }
}

class CheckingAccount extends Account {
  constructor(initialBalance: number, private fee: number) {
    super(initialBalance);
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this.balance += amount;
    console.log(`Deposited ${amount}, new balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount <= 0) throw new Error("Withdraw must be positive");
    const total = amount + this.fee;
    if (total > this.balance) throw new Error("Insufficient funds (with fee)");
    this.balance -= total;
    console.log(
      `Withdrew ${amount} (+ fee ${this.fee}), new balance: ${this.balance}`
    );
  }
}

const savingAcc = new SavingsAccount(1000, 0.5);
const ckeckingAcc = new CheckingAccount(1000, 2.5);

console.log(savingAcc);
savingAcc.deposit(100);
savingAcc.withdraw(600);
savingAcc.addInterest();

console.log(ckeckingAcc);
ckeckingAcc.deposit(100);
ckeckingAcc.withdraw(600);

console.log("TASK 5");

abstract class Media {
  abstract play(): void;
}

class Audio extends Media {
  play() {
    console.log("Playing audio");
  }
}
class Video extends Media {
  play() {
    console.log("Playing video");
  }
}
const medias: Media[] = [new Audio(), new Video()];

medias.forEach((item) => item.play());
