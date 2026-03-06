// type chai = {name : string , age : number}

// function printName(chai:chai) : void {
//     console.log(chai)
// }

// printName({name : "arpan", age : 22})




// This is called intersection types --- 
// type A = {
//   name: string
// }

// type B = {
//   age: number
// }

// type C = A & B

// const user: C = {
//   name: "Arpan",
//   age: 22
// }

type Chai = {
  name : string,
  age? : number,
  email : string
}

function printUser(user:Chai) {
   console.log(user)
}
const user: Chai = {
  name: "arpan",
  // age: 22,
  email: "arpan@email.com"
}

// printUser({name : "arpan", age : 22, email : "arpan@email.com"})
printUser(user)