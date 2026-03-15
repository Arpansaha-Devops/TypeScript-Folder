let name : string = "string" ; 
// This is called as inference means it knows automatiaclly what it's type is ;
// name = 20; // here we are getting error because we are trying to assign a number to a string variable which is not allowed in typescript.
console.log(name)


let str : string = "Arpan";

function printsTr(str:string) {  // this is known as our project 2 means you have to explecitly declare the Data type
    return `Hello,${str}`
}

console.log(printsTr(str))


// directly inside the function ----

function createOrder(order: { id: string; price: number }) {
  console.log(order.id, order.price);
}

createOrder({ id: "ORD1", price: 500 });


let num : number = 10; // this is called as annotation means we are explicitly declaring the data type of the variable
// num = "string"; // here we are getting error because we are trying to assign a string to a number variable which is not allowed in typescript.
console.log(num)

const s1: symbol = Symbol("id");
const s2: symbol = Symbol("id");

console.log(s1 === s2);



// any data type -----

let randomValue: any = 10; // this is called as any data type which can hold any type of value
randomValue = "string"; // here we are assigning a string to a variable which is of any data type which is allowed in typescript.
console.log(randomValue)

// any with array -----

let arr : any[] = [1,2,3,4,5]; // this is an array of any data type which can hold any type of value
arr.push("six"); // here we are pushing a string to an array which is of any data type which is allowed in typescript.
console.log(arr)



// unknown data type -----

let randomValue1 : unknown = 10;  
// this is called as unknown data type which can hold any type of value but we cannot perform any operations on it until we type cast it to a specific data type.
randomValue1 = "string"; // here we are assigning a string to a variable which is of unknown data type which is allowed in typescript.

if (typeof randomValue1 === "number" ) {
  console.log(randomValue1 * 2); // here we are checking if the variable is of type number then we can perform the operation on it which is allowed in typescript.
} else if (typeof randomValue1 === "string") {
  console.log(randomValue1.toUpperCase()); // here we are checking if the variable is of type string then we can perform the operation on it which is allowed in typescript.
}

console.log(randomValue1)



// Void data type -----

function printMessage(message: string): void { // this is called as void data type which means the function does not return anything.
  console.log(message);
}

printMessage("Hello, World!"); // here we are calling the function which does not return anything which is allowed in typescript.


// never data type -----

function throwError(message: string): never { // this is called as never data type which means the function never returns anything and it always throws an error.
  throw new Error(message);
}

// throwError("This is an error message!"); 


function add(x:number, y: number) {
  return x + y;
}

console.log(add(5,10));


