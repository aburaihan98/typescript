function myFun(a: number, b?: number): number {
  if (b) {
    return a + b;
  }
  return a;
}

const sum = myFun(1, 2);
const sumTwo = myFun(1);
// const sumThree = myFun(1, "a");
