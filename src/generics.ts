// <T>, <B>
// <T, B>

function getting<A, V>(a: A, b: V): void {
  console.log(a, b);
}
getting("a", "b");

interface GenericInterface<T> {
  value: T;
}

class MyClass1 implements GenericInterface<string> {
  value: string = "a";
}

class MyClass2 implements GenericInterface<number> {
  value: number = 1;
}
