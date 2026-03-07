let name = "string"; 
// This is called as inference means it knows automatiaclly what it's type is ;
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