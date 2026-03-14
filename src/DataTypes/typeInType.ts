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