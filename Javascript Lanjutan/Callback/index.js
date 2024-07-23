// callback fungsi yang didalam fungsi dan dijalan ataupun dikembalikan oleh fungsi
// fungsi callback utamanya adalah untuk memberikan suatu fungsi pada fungsi lain
// jadi dengan mudah enkapsulasi fungsi
// simple greet

let greet = (name, callback) => {
  console.log(`Hello ${name}`);
  callback(name);
};
let sayGoodbye = (name) => console.log(`Goodbye ${name}!`);
let sayGoodday = (name) => console.log(`Have a good day${name}!`);
let sayHow = (name) => console.log(`How are you ${name}!`);

greet("Alisha", sayGoodbye);
greet("Alisha", sayGoodday);
greet("Alisha", sayHow);

// file handling
// const fs = require("fs");

// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading the file:", err);
//     return;
//   }
//   console.log("File content:", data);
// });

// Chaining Callbacks using timeouts
// function firstTask(callback) {
//   console.log("First task started...");
//   setTimeout(() => {
//     console.log("First task done!");
//     callback();
//   }, 1000);
// }

// function secondTask(callback) {
//   console.log("Second task started...");
//   setTimeout(() => {
//     console.log("Second task done!");
//     callback();
//   }, 1000);
// }

// function thirdTask() {
//   console.log("Third task started...");
//   setTimeout(() => {
//     console.log("Third task done!");
//   }, 1000);
// }

// firstTask(() => {
//   secondTask(() => {
//     thirdTask();
//   });
// });

//Error handling in callback

function divide(a, b, callback) {
  if (b === 0) {
    callback(new Error("Tidak boleh dibagi dengan angka 0"));
    return;
  }
  const result = a / b;
  return callback(null, result);
}

divide(10, 0, (err, result) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log("Result:", result);
});
