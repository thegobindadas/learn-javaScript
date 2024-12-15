//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined
// let phoneNo = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// const bigNumber = 3456543576654356754n


console.log(typeof outsideTemp); // object
console.log(typeof anotherId);




// Reference (Non primitive): Array, Objects, Functions

const heros = ["Superman", "Ironman", "Thor"];

let myObj = {
    name: "gobinda",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction); // function (object function)

// https://262.ecma-international.org/5.1/#sec-11.4.3




// stack (primitive), Heap (Non-primitive)
