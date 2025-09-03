console.log("TASK 1");

class Animal {
  constructor(public name: string, public species: string) {}

  sound(): void {
    console.log(`The animal (${this.name}) makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name: string, species: string, public breed: string) {
    super(name, species);
  }

  sound(info: string = ""): void {
    console.log(`The dog (${this.name}) barks${info ? ", " + info : ""}`);
  }
}

class Puppy extends Dog {
  sound(): void {
    super.sound(`but puppy whines`);
  }
}

const animal = new Animal("Kersa", "Zebra");
const dog = new Dog("Baddy", "Dog", "Buldog");
const puppy = new Puppy("Kisha", "Dog", "Toy-terrier");

animal.sound();
dog.sound();
puppy.sound();

console.log("TASK 2");

class Library {
  static totalBooks: number = 0;

  constructor() {
    Library.totalBooks++;
  }

  addBook(): void {
    Library.totalBooks++;
  }
}
let i = 0;
while (i < 3) {
  const book = new Library();
  console.log("add + 1");

  if (i % 2 === 0) {
    console.log("add extra +1");

    book.addBook();
  }

  i++;
}

console.log(Library.totalBooks);

console.log("TASK 3");

class Vehicle {
  constructor(public make: string, public model: string) {}
}

class Motorcycle extends Vehicle {
  constructor(make: string, model: string, public type: string) {
    super(make, model);
  }
}

console.log(new Vehicle("bmw", "roader"));
console.log(new Motorcycle("bmw", "roader", "benzin"));
