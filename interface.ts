// Interface is a way to define a contract for the shape of an object. It species the properties and their types that an object MUST HAVE. Interfaces are a powerful tool for enforcing a certain structure in your code.
console.log("Hello Interface");
const log = (text: string) => {
  console.log(`\x1b[30m\n${text}:\x1b[0m`);
};
log("This is the start of interface - interface -");
// interface is a reserved keyword.

// While interfaces are commonly used to define the structure of objects, they are not limited to just objects. Interfaces in TypeScript can also be used to describe the shape of functions and classes.
// So we'll use Interfaces for: functions, classes, and also for the objects.
interface Movie {
  readonly name: string;
  ratings: number;
  genre?: string;
}

const starwars: Movie = {
  name: "Star Wars",
  ratings: 9.6,
  genre: "Action",
};

// starwars = "Barbie Doll"; // this is a readonly property you can't mutate it.
console.log(starwars);

interface Song {
  title: string;
  singer: string;
  printSongInfo(): string;
}

const baby: Song = {
  title: "Beauty and the Beat",
  singer: "Justin Bieber",
  printSongInfo() {
    return `Song: ${this.title}, sang by ${this.singer}`;
  },
};

console.log(baby.printSongInfo());

// Interface for a function
log("Interface for a function -");
interface MathOperation {
  (x: number, y: number): number;
}

// Usage
const add: MathOperation = (a, b) => a + b;
const substract: MathOperation = (a, b) => a - b;

console.log(add(5, 3));
console.log(substract(7, 2));

// ----

// Interface for a class
log("Interface for a class -");
interface Vehicle {
  start(): void;
  stop(): void;
}

// Class implementing the interface
class Car implements Vehicle {
  // so notice that we used the keyword 'implements' not the extends
  // it means we are going to implement the Vehicle interface
  start() {
    console.log("Car Started");
  }
  stop() {
    console.log("Car stopped");
  }
}

// Usage
const myCar = new Car();
myCar.start();
myCar.stop();

// ----

// Declaration merging
log("Declaration merging - interface 1 {} interface 1 {} -  ");
// Once an interface is declared, it cannot be directly modified.
// However, TypeScript allows what is informally referred to as "Declaration merging" of "interface extension", which is often miscontrued as "re-opening"

// Declaration merging in TypeScript refers to the ability to extend or augment an existing declaration, including interfaces. This ca be useful when you wan to add new properties or methods to an existing interface without modifying the orignal declaration.

// Original interface
interface Car {
  brand: string;
  start(): void;
}

// Declaration merging (interface extension
interface Car {
  model: string;
  stop(): void;
}

// Usage of the extended interface
const myCarIns: Car = {
  brand: "Toyota",
  model: "Camry",
  start() {
    console.log("Car Started");
  },
  stop() {
    console.log("Car stopped");
  },
};

console.log(myCarIns);

// ----

// Generics
log("Generics - <T>");
// In TypeScript, generics allow you to create reusable components that can work with a variety of types. Generics make it possible for you to define functions, classes, and interfaces that can work with different data types without having to duplicate code.
// Generic Functions and
// Generic Classes

// Regular Function
log("  Generics - Regular Function -");
const printString = (x: string) => console.log(x);
const printNumber = (x: number) => console.log(x);
const printBoolean = (x: boolean) => console.log(x);

console.log(printString("Hello"));
console.log(printNumber(33));
console.log(printBoolean(true));

const printAny = (x: any) => console.log(x);
// Any type is not a best practie and it's advisable to avoid this way as it isn't TypeScipt sensing
console.log(printAny("Any Type"));
console.log(printAny(4));
console.log(printAny(true));

// Generic Function
log("  Generics - Generic Function -");
function printGeneric<Type>(x: Type): Type {
  // For convention you can use any keyword within <Here> to specify a generic type but convention is <T>
  return x;
}
// the <T> is where we would be specifying the data type for the function generics.
const genStr = printGeneric<string>("Hello");
const genNum = printGeneric<number>(28);
const genBool = printGeneric<boolean>(false);

console.log({ genStr, genNum, genBool });

// --

// Generic Function with Objects
log("    Generics - objects -");

function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randomKey = keys[Math.floor(Math.random() * keys.length)] as string; // added as string here for to work on the operation on doing Math.floor and Math.random to the length of the keys

  return { key: randomKey, value: obj[randomKey] as T };
}
const stringObj = { a: "apple", b: "banana", c: "cherry" };
const randomStr = getRandomKeyValuePair<string>(stringObj); // Notice we explicitly definet the generic  <string>
console.log(randomStr);

// TS knows randomStr.value is a string!

const numObj = { x: 10, y: 20 };
const randomNum = getRandomKeyValuePair<number>(numObj); // Notice we explicitly define the generic <number>
console.log(randomNum);
// TS knows randomNum.value is a number!

// --
// Array of Numbers
log("    Generics - number -");
// Function that filter an array based on a condition.
function filterArr<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArr<number>(numberArr, (num) => num % 2 === 0);
console.log(evenNumbers);

// --
// Array of Strings
log("    Generics - string -");
const stringArr = ["apple", "banana", "cherry", "orange", "date"];
const shortWords = filterArr<string>(stringArr, (word) => word.length < 6);
console.log(shortWords);

// --
// Generics with Interface
log("    Generics - interface -");
interface Fruit {
  name: string;
  color: string;
}

const fruitArr: Fruit[] = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "cherry", color: "red" },
];

const redFruits = filterArr<Fruit>(fruitArr, ({ color }) => color === "red");
console.log(redFruits);

// ----

// Generic function that takes multiple types
log("Generic - Multiple Types - T , U -");
function reversePair<T, U>(valueT: T, valueU: U): [U, T] {
  return [valueU, valueT];
}

const reversedPair = reversePair("Woah!!", 99);
console.log(reversedPair);

// ----

// Generic Classes
log("Generic Classes - class Class<T> -");

class Box<T> {
  private content: T;

  constructor(initialContent: T) {
    this.content = initialContent;
  }

  getContent(): T {
    return this.content;
  }

  setContent(newContent: T): void {
    this.content = newContent;
  }
}

const stringBox = new Box<string>("Hello, TypeScript");
console.log(stringBox);

stringBox.setContent("Rust is also Good");
console.log(stringBox);

// --

const numberBox = new Box<number>(30);
console.log(numberBox);

numberBox.setContent(33);
console.log(numberBox);
