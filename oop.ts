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
log("Type Aliases - type -");
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
log("Optional Properties - ? -");
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
log("Intersection Types - & -");
// An intersection type is a way to combine multiple types into a single type that includes all the properties and methods of each constituent type. An intersection type is denoted by the & symbol.

type User = {
  id: number;
  name: string;
  email: string;
};
type Permissions = {
  canDelete: boolean;
  canEdit: boolean;
};

type Admin = User & Permissions;
const frank: Admin = {
  id: 1,
  name: "Frank",
  email: "frank@example.com",
  canDelete: true,
  canEdit: true,
};

console.log(frank);

// ----

// Unions --- Unions are actually preferred over enums.
log("Unions - | -");
// Unions are used to declare a type that can have one of several possible types. Unions are useful when we want to allow a variable or parameter to accept multiple types.
// The syntax for defining a union type in TypeScript ses the pipe symbol ( | ).
type RequestStatus = "idle" | "loading" | "success" | "error";
let currentStatus: RequestStatus = "idle";

currentStatus = "success"; // will work
// currentStatus = "finished" // will not work, it isn't specified as an option from the Type Definition.
console.log(currentStatus);

// Unions can also be combined with other types in TypeScript, usch as interfaces and classes. For example, we could define an interface that has a property that can be either a string or a number.

type UserDetails = {
  username: string;
  age: number;
  phone: number;
};
type AccountDetails = {
  email: string;
  password: string;
};

const user: UserDetails | AccountDetails = {
  username: "frankuccino",
  age: 23,
  phone: 9392,
  // email: " frank@example.com",
  // password: "helloworld",
};
console.log(user);

function printId(id: number | string) {
  console.log(`Your ID is: ${id}`);
}
printId("23100");
printId(23100);

const items: (number | string)[] = [1, 3, 4, 7, "hello"];
console.log(items);

// ----

// Literatal Types
log("Literal Type - string | number | boolean");
// Literal types allow you to specify a value that can only be one specific literal value. This means that a variable with a literal type can only have one specific value and no other.

// String Literal Types
let colors: "red" | "blue" | "green";
colors = "red"; // valid
// colors = "yellow" // invalid

// Boolean Literal Types
let isTrue: true;
isTrue = true;
// isTrue = false; // invalid

// Numeric Literal Types
let number: 1 | 2 | 3;
number = 1;
// number = 4; // invalid
console.log(colors, isTrue, number);

// ----

// Tuples
log("Tuples - [type, type]");
// Tuple is a type that represents an array with a fixed number of elements, where each element can have a different type. The order of the types in the tuple definition corresponds to the. order of the values in the actual array. Tuples are similar to arrays, but they have a specific structure and can be used to model finite sequences with known lengths.
let myTuple: [string, number] = ["hello", 23];

// Destructuring Individual Element
let [first, second] = myTuple;
console.log(first);
console.log(second);

const games: [string, string, string] = [
  "League of Legends",
  "Mobile Legends",
  "Valorant",
  // "GTA", // only 3 elements as it was specifed as a Tuple so adding more or less values or different data type won't work.
];

console.log(games);

// ----
// Enums
log("Enums - enum -");
// Enum is a way to define a set of named constants. Enums allow you to define a collection of related values that can be used interchangeable in your code.

// For example, let's say you're building a weather app and you want to define a set of possible weather conditions like "sunny", "cloudy", "rainy", and "snowy". You could define an enum like this:
enum WeatherConditions {
  Sunny,
  Cloudy,
  Rainy,
  Snowy,
}
console.log(WeatherConditions);
const currentWeather = WeatherConditions.Cloudy;
console.log(`The current weather is ${currentWeather}`);

enum WeatherConditionsNamed {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}
console.log(WeatherConditionsNamed);
const currentWeatherNamed = WeatherConditionsNamed.Cloudy;
console.log(`The current weather is ${currentWeatherNamed}`);

// In this example, WeatherConditions is the name of the enum, and each of the values is assigned an automatic numerical value starting from 0;

// ----

// (Timestamp 8:18:00, Time Invested 1hr & 30) Up Next:
// Class Properties Annotations -
log("Class Properties Annotations - class -");
// You can annotate class properties with a type. This allows you to define the data type of the property and ensure that it is always consistent.
class PersonClass {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const personIns = new PersonClass("frank", 23);
console.log(personIns);

// ----

// Access Modifiers
log("Access Modifiers - public - private - protected -");
// In TypeScript, you can use access modifiers to control the visibility of class members (properties and method). Access modifiers determine the ways in which class members can be accessed from within and outside the class
// There are three types of access modifiers in TypeScript
// 1. Public
// 2. Private
// 3. Protected

// Public Modifier - Members marked as public can be accessed from anywhere, both inside and outside the class.
// Private Modifier - Members marked as private can only be accessed from within the class they are defined in.
// Protected Modifier - Members marked as protected can be accessed from within the class they are defined in, as well as any subclasses that extend the class.

class Animal {
  public name: string;
  private age: number;
  protected species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  public getName(): string {
    return this.name;
  }

  protected getAge(): number {
    return this.age;
  }

  protected getSpecies(): string {
    return this.species;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "Canine");
  }

  public getInfo(): string {
    return `${this.getName()} is a ${this.getSpecies()} and is ${this.getAge()} years old`;
    // we cannot call this.age since it is private, but we can use the protected method from Animal
  }
}

const pity = new Dog("Pity", 4);

console.log(pity.getInfo());

// ----

// Getters & Setters
log("Getters & Setters - get - set -");
// Getters and setters are used to access and modify class properties. Getters and setters allow you to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting and setting the value.
class MyClass {
  private _myProperty: number = 0;

  get myProperty(): number {
    return this._myProperty;
  }

  set myProperty(value: number) {
    if (value < 0) {
      throw new Error("Value cannot be negative");
    }
    this._myProperty = value;
  }
}

const myInstance = new MyClass();
console.log(`Current Value: ${myInstance.myProperty}`);

myInstance.myProperty = 10;
console.log(`Current Value: ${myInstance.myProperty}`);

// ----

// Abstract Class (Not included in the video)
log("Abstract Class - abstract class -");
// 'abstract' means you CANNOT do: const shape = new Shape();

abstract class Shape {
  constructor(public color: string) {}

  // A regular method: children get this for free
  public describe(): void {
    console.log(`This is a ${this.color} shape.`);
  }

  // An abstract method: Every child MUST implement their own version
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(
    color: string,
    private radius: number,
  ) {
    super(color);
  }

  // Mandatory implementation
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(
    color: string,
    private side: number,
  ) {
    super(color);
  }

  // Mandatory implementation
  getArea(): number {
    return this.side * this.side;
  }
}

// Create instances of the concrete subclasses
const myCircle = new Circle("red", 5);
const mySquare = new Square("blue", 10);

// / 1. Using the shared logic from the Abstract Class
myCircle.describe(); // Output: "This is a red shape."
mySquare.describe(); // Output: "This is a blue shape."

// Using the mandatory implemented logic
console.log(`Circle Area: ${myCircle.getArea().toFixed(2)}`); // Output: Circle Area: 78.54
console.log(`Square Area: ${mySquare.getArea()}`);

// 3 Golden Ruels of Abstract Classes:

// 1. No Direct Instantiation: You can't create an "Abstract" object. Youcan only create the specific classes that extend it.
// 2. The "Contract": If you define an `abstract method()`, you are promising TypeScript that every single subclass will write its own logic for that method.
// 3. Shared Logic: Unlike an Interface (which only defines structure), an Abstract Class can contain real code (like the describe() method above) that all children share.

const shapes: Shape[] = [myCircle, mySquare];

shapes.forEach((s) => {
  console.log(`The ${s.color} shape has an area of ${s.getArea()}`);
});
