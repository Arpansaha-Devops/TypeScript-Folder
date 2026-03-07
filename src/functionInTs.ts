function createOrder(order: { id: string; price: number }) {
  console.log(order.id, order.price);
}

createOrder({ id: "ORD1", price: 500 });



type Chai = {
    quantity : number | string,
    size : number,
    name : string,
    price : number
}

function printChai(chai:Partial<Chai> ): void{
console.log(`Here is your ${chai.name}`)
    setTimeout(() => {
 console.log(`the amount of you chai is ${chai.price} `)
    },2000)
   
}


printChai({ name: "capachino", price: 50 })