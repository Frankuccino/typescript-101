// Type Narrowing
// Type narrowing is the process of refining a variable's type within a conditional block of code. This allows you to write more precise and type-safe code.
const log = (text: string) => {
  console.log(`\x1b[30m\n${text}:\x1b[0m`);
};
log("Type Narrowing!!");
// TypeScript provides several mechanisms for narrowing types

// Type guards
// the instanceof operator
// Intersection types
// Discriminated unions

// Type Guards are mechanisms that help TypeScript understand and narrow down the types more precisely. One comon type guard is the `typeof` operator
const word = "word";
const type = typeof word;
console.log(`The type of ${word} is ${type}`);
