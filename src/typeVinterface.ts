type Address = string;

type StringOrNumber = number | number;

type Movies = "a" | "b" | "c";

interface A {
  name: string;
}

interface B {
  role: number;
}

type AB = A | B;

const ourBook: AB = {
  name: "asdf",
  role: 12,
};
