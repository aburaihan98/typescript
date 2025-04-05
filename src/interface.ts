interface Customer {
  name: string;
  address: string;
}

const myCustomer: Customer = {
  name: "Abu",
  address: "Dhaka",
};

class GoldenChase implements Customer {
  name: string;
  address: string;

  constructor(name: string, address: string) {
    (this.name = name), (this.address = address);
  }
}

const abc = new GoldenChase("Raihan", "Dhaka");
