// Type Narrowing
// Type narrowing is the process of refining a variable's type within a conditional block of code. This allows you to write more precise and type-safe code.
const log = (text: string) => {
  console.log(`\x1b[30m\n${text}:\x1b[0m`);
};
console.log("Hello Type Narrowing");
log("Type Narrowing!!");
// TypeScript provides several mechanisms for narrowing types

// Type guards - typeof operator
// the instanceof operator
// Intersection types
// Discriminated unions

// Type Guards are mechanisms that help TypeScript understand and narrow down the types more precisely. One comon type guard is the `typeof` operator
log("Type Guards - typeof operator -");
const word = "word";
const type = typeof word;
const number = 23;
const typeNum = typeof number;
console.log(`The type of ${word} is ${type}`);
console.log(`The type of ${number} is ${typeNum}`);

// Define a union type
type MyType = string | number;
function exampleFunction(value: MyType): void {
  // Type guard using typeof
  if (typeof value === "string") {
    console.log(value.toLocaleUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

// Example Usage:
exampleFunction("Helloo");
exampleFunction(33);

// ----

// instanceof Operator
log("Type Guards - instanceof operator -");
// The instanceof operator is another type guard in TypeScript that allows you to check whether an object is an instance of a particular class or constructor function.
class Dog {
  bark(): void {
    console.log("Woof!");
  }
}

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

function animalSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// Example Usage
const myDog = new Dog();
const myCat = new Cat();

animalSound(myDog);
animalSound(myCat);

//  ----

// Intersection types
log("Intersection types");
// Intersection types in TypeScript allow you to combine multiple types into a single type. The resulting type will have all the properties of each individual type. You create insersection types using the & operator.
type Employee = {
  id: number;
  name: string;
};

type Manager = {
  department: string;
  role: string;
};

// Create an intersection type
type ManagerWithEmployeeInfo = Employee & Manager;

// Example Usage
// const manager: Employee & Manager = { // you can still do this or just bind the Intersection into a variable.
const manager: ManagerWithEmployeeInfo = {
  id: 123,
  name: "Frank Angelo",
  department: "Engineering",
  role: "Team Lead",
};

console.log(manager.id);
console.log(manager.name);
console.log(manager.department);
console.log(manager.role);
