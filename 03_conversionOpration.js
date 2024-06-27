// conversion is use for to convert one datatype in other data type
// Ex. number -> string
//                               // after conversion
let score = "33";           //type: number value: NaN
// let score = "53abc";     //type: number value: 0
// let score = null         //type: number value: NaN
// let score = undefined    //type: number value: NaN
// let score = true         //type: number value: 1
// let score = false         //type: number value: 0

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = 99
let booleanISLoggedIn = Boolean(isLoggedIn);
console.log(booleanISLoggedIn);

// 1 => true  0 => false
// "" => false
// "yash" => true
// 69 => true

let x = 34

let stringNumber = String(x);
console.log(stringNumber);
console.log(typeof stringNumber);

// ****************************** Oprations ******************************

