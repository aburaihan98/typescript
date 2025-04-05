"use strict";
let number = 234;
let myName = "allah";
let address = `${myName} abu raihan`;
let bul = false;
let an = "ok";
let sn = 234;
sn = "allah";
if (typeof myName === "string") {
    console.log("yes it ia a string");
}
else {
    console.log("nope");
}
class Car {
    constructor(input) {
        this.name = input;
    }
}
class Human {
    constructor(input) {
        this.name = input;
    }
}
let bmw = new Car("BMW Car");
if (bmw instanceof Car) {
    console.log("Yes");
}
else {
    console.log("No");
}
let str = "I am a string created with any";
let index = str.indexOf("a");
console.log(index);
let index1 = str.indexOf("a");
