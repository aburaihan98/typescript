"use strict";
const myCustomer = {
    name: "Abu",
    address: "Dhaka",
};
class GoldenChase {
    constructor(name, address) {
        (this.name = name), (this.address = address);
    }
}
const abc = new GoldenChase("Raihan", "Dhaka");
