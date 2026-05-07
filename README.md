# TypeScript 101 🚀

This repository is a dedicated workspace for mastering TypeScript core principles. It serves as the foundational laboratory for type-safe development before transitioning into full-stack React & TypeScript implementation.

## 📌 Project Overview

This repository serves as a comprehensive technical log of my TypeScript specialization. It documents the transition from core type theory and interface architecture to advanced compiler configurations, establishing the prerequisite type-safety required for the React Monsterclass.

- **Goal:** Establish a robust understanding of the TypeScript type system and build-time safety.
- **Next Milestone:** Application of these patterns within the [React Monsterclass](https://github.com/Frankuccino/react-monsterclass).

---

## 🛠 Tech Stack & Environment

- **Node.js:** v24.13.0 (Managed via NVM)
- **TypeScript:** v5.x (Project-local installation)
- **Runtime:** `ts-node` for direct execution
- **IDE:** Visual Studio Code

---

## 🧠 Core Technical Concepts

### Type Primitives

Adhering to TypeScript best practices by utilizing primitive types over object wrappers to ensure performant and idiomatic code.

- ✅ `let myName: string`
- ❌ `let myName: String`

### Compiler Configuration

The `tsconfig.json` acts as the project's source of truth for the compiler.

- **Initialization:** Generated via `tsc --init`
- **Purpose:** Defines module resolution, target ECMAScript versions, and strictness flags to maintain code quality.

---

## 🚀 Execution Guide

### Via Terminal

To execute a TypeScript file using the local environment context:

```bash
npx ts-node src/index.ts
```

### Via VS Code (Code Runner)

This project is configured for rapid prototyping via the Code Runner extension.

- MacOS Hotkey: `Ctrl + Option + N`

- Configuration: Ensure your settings.json executor map is set to `"typescript": "npx ts-node"`.
