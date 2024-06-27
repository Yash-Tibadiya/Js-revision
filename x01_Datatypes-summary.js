// JavaScript is a dynamically typed language
// Typescript is a statically typed language

// primitive
// 7 types : String, Number, Boolean, BigInt, Symbol, null, undefined

const x = 100; // Number
const y = 100.69; // number

const isLoggedIn = true; // boolean
const outsideTemp = null; // object

let userEmail; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");
// same value symbol are different
console.log(id == anotherId); // false
console.log(id === anotherId); // false

const bigNumber = 33556575423154235123151n;
console.log(typeof bigNumber);

// #################################################################

// Reference (non primitive)
// Array, Object, Function

// Array
const heros = ["Captain America", "Iron Man", "Thor"];

// Object
let myObject = {
  name: "Yash",
  age: "20",
};

// Function
const myFunction = function () {
  console.log("hello world");
};

console.log(typeof heros);
