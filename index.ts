// Installed: npm install -g typescript ts-node
// Installed Extension in VSCode: JS & TS Nightly and Code Runner.
// Code Runner hotkey: ctrl + Option + n
// Code runner uses: ts-node <file>
// Check Code Runner: Executor Map in VSCode Setting (settings.json)
// --- This Code Runner is purely for better internal development loop.

const log = (text: string) => {
  console.log(`\x1b[30m\n${text}:\x1b[0m`);
};

type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "Frank",
  age: 23,
};

console.log(person.name, person.age);
console.log("hello world!");
// ----

// Annonations
// Annotations are used to specify the data type of a variable parameter, funcriont return value, and other types of values. Annotations help developers catch errors early in development by allowing them to specifiy what types of values can be assigned to a given variable or passed as an argument to a function.

// Annotations for:
// Strings
let myName: string = "Frank";

// Numbers
let age: number = 23;

// Boolean
let isMarried: boolean = false;

// ----

// Type Inference
log("Type Inference");

// Type inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its value. In other words, if you declare a variable without explicitly epecifying its type, TypeScript will try to infer the type based on the value you assign to it .

let technology = "TypeScript"; // This made a Type Inference when initialized without explicit type annotation set
// technology = 10; // This Assignment isn't allowed. because technology is a string type when initialized.

let isTypeScriptHard = true;
isTypeScriptHard = false; // This Assignment is fine because this variable is initialized as a boolean type.
console.log(isTypeScriptHard);

// ----

// Any Type
log("Any Type");

// TypeScript has a special any type that can be used to represent any type. When a variable is annotated with the any type, TypeScript will allow it to have any value and disable all type checkign for that variable and its properties.
// This is an awful convention to use
// Any Type (WARNING)
// While the any type can be useful in certain situations, it should be used sparingly. Overuse of any type can lead to untyped code and make it harder to catch type-related bugs during development. It's generally better to use more specific types whenever possible to get the benefits of TypeScript's type checking.
let color: any = "mauve";
color = 33;
color = false;
console.log(color);

// ----

// Function Parameters Annotations
log("Function Parameters");
// Function parameter annotations in TypeScript are used to specify the expected types of the parameters that a function takes.
// You just have to annotate the parameter of the function to a data type.

// function declaration
function add(num: number, addend: number) {
  return num + addend;
}
const addition = add(28, 5);
console.log(addition);

// Arrow function
const multiply = (x: number, y: number) => x * y;
const multiplication = multiply(14, 2);
console.log(multiplication);
// Also notice, TypeScript will give you warning if you provide more or less arguments than you specify in your parameters area.
// TypeScript expects the same count of Parameters upon function parameter declaration
// YOu need to pass the same amount of arguments specified in the function.

// ----

// Default Params Value.
log("Default Parameter Value");
function greet(name: string = "User") {
  return `Hello ${name}`;
}
const greeting = greet();
console.log(greeting);

// ----

// Return Annotations (Regular)
log("Return Annotations");
function square(num: number): number {
  return num * num;
}
const squaring = square(80);
console.log(squaring);

// Arrow function
const squareFn = (num: number): number => num * num;
const squaringFn = squareFn(33);
console.log(squaringFn);

// ----

// Void in TypeScript
log("Void in TypeScript");
// Void is a type that represents the abscence of any value. It is often used as the return type for functions that do not return a value.
function printMessage(message: string): void {
  // It can be explicitly annotated or can be type inferred.
  console.log(`I have to say ${message}`);
}
printMessage("TypeScript is awesome!");

// ----

// Never
log("Never Keyword");
// The never keyword is used to indicate that a function will not return anything, or that a variable can never have a value. The never type is useful for indicating the certain code paths should never be reached, or that certain values are impossible. It can help catch errors at compile-time instead of runtime.
// Three cases we're going to use it for:
// 1. A function that always throws an error.
// 2. A function that has an infinite loop.
// 3. A variable that can enver have a value.

// function that always throws an error
function throwError(msg: string): never {
  throw new Error(msg);
}
// throwError("You should code 80% of the time than watching tutorials.");

// A function that has an infinite loop
function infiniteLoop(): never {
  while (true) {}
}

// A variable that can never have a value
let x: never;
// x = "hello"; // Have a compile-time error
// SError: ⨯ Unable to compile TypeScript:
// index.ts:147:1 - error TS2322: Type '"hello"' is not assignable to type 'never'.

// ----
// Array Types
log("Array Types");
// Arrays are a type of object that can store multiple values of the same data. Arrays in TypeScript are typed, which means you can specify the type of values that an array can hold.
// Two ways of declaring an array:
// 1. Using the square bracket notation [] to indicate an array of a specific type.
// 2. Using the generic Array <type> notation to indicate an array of specific type.
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);
const strings: Array<string> = ["Billie", "Jeans", "Is", "Not", "My", "Lover"];
console.log(strings);

// ----

// Multi Dimensional / Matrix / Nested Arrays
log("Matrices");
// a multi-dimensional array is an arary that contains arrays as its elements. Multi-dimensional arrays can be defined using the same notation as one-dimensional arrays, but with nested square brackets.
const matrix: number[][] = [
  [1, 3, 4],
  [1, 2, 5],
];

const deepMatrix: number[][][] = [[[10, 20, 30]], [[20], [21], [23]]];
console.log(matrix);
console.log(deepMatrix);

// ----

// Objects - (Timestamp: 7:36:00, Time Invested: 2 hrs) Up Next: Objects
log("Objects");
// Anobject in TypeScript is a structured data type that represnets a collection of properties, each with a key and an associated value. The properties of an object can have specific types, and the object itself can be annotated with a type, often defined using an interface or a type alias. TypeScript uses structural typing, meaning that the shape of an object (its structure or properties) is what matters for type compatibility.
const personA: { firstName: string; age: number } = {
  firstName: "Frank",
  age: 23,
};
console.log(personA);

// Objects as function Return value
function printUser(): { name: string; age: number } {
  // factory function
  return {
    name: "Frank",
    age: 23,
  };
}
printUser();

// ----

// Type Aliases. -> (Interfaces are more powerful than Type Aliases)
log("Type Aliases");
// A type alias is a way to create a new name for an -> existing type <-. It allows you to define a custom type that refers to another type and give it a more meaningful or descriptive name.
// Type aliases are defined using the `type` keyword followed by the name of the alias, an equal sign (=), and the type it refers to

type Product = {
  // The convention is to use the first letter as an Uppercase letter.
  brand: string;
  quantity: number;
};

function printProduct(product: Product) {
  console.log(`Product: ${product.brand} quantity: ${product.quantity}`);
}

const myProduct: Product = { brand: "iPhone", quantity: 3 };
printProduct(myProduct);

// ----

// Optional Properties ?
log("Optional Properties");
// You can make a certain property optional in an object type by adding a question mark (?) after the property name
// For example, let's say you have an object type for a person with name, age, and email, but you want to make email property optional. You can do this by adding a question mark after the email property

// Type Definition & Assignment
type Book = {
  title: string;
  author: string;
  copiesSold?: number; // Notice the ? (Question Mark) which makes this property optional.
  readonly publisher: string;
};

// Variable Declarion with the type Book
const book: Book = {
  title: "Designing Data-Intensive Applications",
  author: "Martin Kleppman",
  publisher: "O'Reilly", // declared -> is a readonly property (immutable)
};

console.log(book);
book.author = "Martin";
console.log(book);
// book.publisher = "Frank" // not allowed

//  ----
// Intersection Types
