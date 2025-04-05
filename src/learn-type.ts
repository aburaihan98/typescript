let number: number = 234;
let myName: string = "allah";
let address: string = `${myName} abu raihan`;
let bul: boolean = false;
let an: any = "ok";
let sn: string | number = 234;
sn = "allah";

if (typeof myName === "string") {
  console.log("yes it ia a string");
} else {
  console.log("nope");
}

class Car {
  name: string;
  constructor(input: string) {
    this.name = input;
  }
}

class Human {
  name: string;
  constructor(input: string) {
    this.name = input;
  }
}

let bmw = new Car("BMW Car");
if (bmw instanceof Car) {
  console.log("Yes");
} else {
  console.log("No");
}

let str: any = "I am a string created with any";
let index: number = (str as string).indexOf("a");
console.log(index);
let index1: number = (<string>str).indexOf("a");
