type MyNumber = number;

const role: MyNumber = 10;

type Employee = {
  name: string;
  role: MyNumber;
  courses: Array<string>;
  class: number[];
  email?: string;
};

const myStudent: Employee = {
  name: "Raihan",
  role: 10,
  courses: ["a", "b"],
  class: [1, 2],
};

type MyDepartment = {
  name: string;
  department: Employee[];
};

const departmentOne: MyDepartment = {
  name: "cse",
  department: [myStudent],
};

type ISBN = string | number;

const myBook: ISBN = "1111";
const YouBook: ISBN = "1111";

type book = {
  name: string;
  isbn: ISBN;
};

type writer = {
  bookWriter: string;
  address: Employee[];
};

type bookWriter = book & writer;

const myBookWriter = {
  name: "Allah is our rob",
  isbn: "25",
  bookWriter: "Abu Raihan",
  address: [myStudent],
};

type withLWS = `LWS${string}`;

const lws: withLWS = "LWS is a plartform";
