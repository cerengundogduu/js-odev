# University Course Management System

This project is a JavaScript-based course management system built with Node.js and ES6 Modules.

## Features
- Immutable student IDs using `Object.defineProperty`.
- Simulated asynchronous database fetch using callbacks and `setTimeout`.
- Data analytics with array manipulation (`reduce`, `filter`, `map`).

## File Organization
- `models.js`: Contains the `Student` class and data models.
- `database.js`: Simulates database fetching operations with delays.
- `analytics.js`: Handles array manipulations and statistical calculations.
- `main.js`: The entry point that integrates all modules and executes the logic.

## Challenges Faced
- Understanding and properly implementing ES6 module syntax (`import`/`export`).
- Managing asynchronous execution flows with `setTimeout` and callbacks.
- Ensuring immutability without throwing strict mode errors.

## How to Run
1. Ensure Node.js is installed.
2. Open terminal in the project directory.
3. Run the following command: `node main.js`