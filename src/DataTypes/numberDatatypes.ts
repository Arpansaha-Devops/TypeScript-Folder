let num : number = 10;
console.log(num)


// If we want to use hexadecimal, binary or octal literals, we can use the following syntax:

let hex: number = 0xFF; // hexadecimal
let binary: number = 0b1010; // binary
let octal: number = 0o744; // octal 

console.log(hex, binary, octal);

let numnum : number = 0o01; // this is called as floating point number which can hold decimal values
console.log(numnum)


// Type inference in number data type @ Type anotation in number data type--

let num1 = 10; // here we are not explicitly declaring the data type of the variable but typescript is inferring it as number data type because we have assigned a number value to it.
console.log(num1)

let num2 : number = 20; // here we are explicitly declaring the data type of the variable as number data type which is called as annotation in typescript.


let stringNumber: number = parseInt("123"); // here we are using the parseInt function to convert a string to a number which is allowed in typescript.
console.log(stringNumber)