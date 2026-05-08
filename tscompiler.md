# ⚙️ TypeScript & The Compiler (TSC)

## 📘 Overview

**TypeScript** is a typed superset of JavaScript. It acts as a layer of protection that catches bugs during development before your code ever reaches a browser.

- **Static Typing:** Catch errors during the "compile" phase (while you write code).
- **Documentation:** Types serve as a contract that tells you exactly what data an object or function expects.
- **Refactoring:** Safe code changes; if you rename a property in an interface, TSC shows you every file that is now broken.

---

## 🏗️ The TypeScript Compiler (TSC)

The **TSC** is the command-line tool that transforms `.ts` files into `.js` files.

### 1. Essential Commands

| Command        | Action                                                              |
| :------------- | :------------------------------------------------------------------ |
| `tsc --init`   | Creates `tsconfig.json` (The project configuration).                |
| `tsc index.ts` | Compiles a single file into JavaScript.                             |
| `tsc`          | Compiles the entire project based on the `tsconfig.json` rules.     |
| `tsc -w`       | **Watch Mode:** Automatically re-compiles whenever you save a file. |
| `tsc --noEmit` | Checks for type errors without actually generating `.js` files.     |

---

## 🧠 The `tsconfig.json` Configuration

This file is the "Brain" of your project. It defines the strictness and the target environment.

### Key Compiler Options

```json
{
  "compilerOptions": {
    /* Target Environment */
    "target": "ES2020", // The version of JS to output (e.g., ES6, ESNext)
    "module": "NodeNext", // How imports/exports are handled
    "lib": ["ESNext", "DOM"], // Available environment APIs (like 'window' or 'document')

    /* Strictness Rules */
    "strict": true, // The 'Master Switch' for all type-checking rules
    "noImplicitAny": true, // Error if a variable's type cannot be inferred
    "strictNullChecks": true, // Prevents "null is not an object" errors

    /* Output Management */
    "rootDir": "./src", // Where your source code lives
    "outDir": "./dist", // Where compiled JavaScript goes
    "removeComments": true, // Keeps the output JS clean and small
    "sourceMap": true // Helps with debugging by linking JS back to TS
  },
  "include": ["src/**/*"], // Only look at files inside the src folder
  "exclude": ["node_modules"] // Ignore external libraries
}
```
