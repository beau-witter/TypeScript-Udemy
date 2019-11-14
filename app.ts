// string
let myName: string = "Beau";
//myName = 28; // error

// number
let myAge: number = 27.5;
//myAge = "Beau"; // error

// boolean
let hasHobbies: boolean = true;
//hasHobbies = 1; // error

// assign types
let myRealAge: number;
myRealAge = 27;
//myRealAge = "27"; // error

// array
let hobbies: any[] = ["Cooking", "Video Games"];
hobbies = [100];
//hobbies = 100; // error

// tuples
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
  Gray, // 0
  Green = 100, // 100
  Blue = 2 // 2
}

let myColor: Color = Color.Blue;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

// functions
function returnMyName(): string {
  return myName;
}

console.log(returnMyName());

// void
function sayHello(): void {
  console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

// console.log(multiply(2, "Beau"));
console.log(multiply(10, 2));

// function types
let myMultiply: (val1: number, val2: number) => number;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: { name: string; age: number } = {
  name: "Beau",
  age: 27
};

// userData = {
//   a: "Hello",
//   b: 22
// };