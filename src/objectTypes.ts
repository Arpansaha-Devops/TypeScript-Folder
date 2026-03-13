const obj = {
    name : "arpan",
    age : 22,
    isLoggedIn : true
}


type User = {
    name: string;
    age: number;
    isLoggedIn: boolean;
}

let obj1: User = {
    name: "arpan",
    age: 22,
    isLoggedIn: true
}

function printObj(user: User){
    console.log(user.age);
}

printObj(obj1)


type cup = {
    size : string
};

let smallCup :cup = {size : "200ml"} // we have to give obj because the  the type iw obj 

let bigCup = {size : "500ml", meteriaql : "steel"};

smallCup = bigCup;  // here we are not getting error because we are satisfing the string condition 

console.log(smallCup)




type Item = {name : string, quantity : number}
type Address = {street : string, pin : number}

type order = {
    id : string,
    items : Item[]  // here we are using array because there are so  many item must be inside the obj thats why Item[] means array of Item objects.
    address : Address
}




// Partial Datatypes ----
// By using partial keyWord we can use sigle datatypes in the function ---- but some cases we can send empty objects .



// type chai = {
//     name : string,
//     price : number,
//     isHot : boolean
// };


// const funChay = (chaiUpdat : Partial<chai>) => {
//     console.log("update the single value", chaiUpdat)
// }

// funChay({price : 25})
// funChay({isHot : false})


type chai = {
    name : string,
    price? : number,
    quantity : number
};

function printChai(chai : Partial<chai>){
    console.log(chai.price)
}

printChai({name : "Lemon Chai", price : 30}) // here we are using partial keyWord so we can send single value or all values in the function printChai


// Required keyWord --



// type ChaiOrder = {
//     name ? : string,
//     size? : string | number
// };


// function printOrder(order: Required <ChaiOrder>) {
//     console.log(order)
// }

// printOrder({name : "arpan", size : 7});  // in this required case we must give the all properties it doesn't matter it's optional or required we must have to give it 



// Pick keyword --


// type User1 = {
//   id: number
//   name: string
//   email: string
//   age: number
// }

// // Pick only name and email
// type UserPreview = Pick<User1, "name" | "email">

// const user: UserPreview = {
//   name: "Arpan",
//   email: "arpan@gmail.com"
// }

// console.log(user)


// Omit example --

type DatabaseUser = {
  id: number
  name: string
  email: string
  password: string
  createdAt: Date
}

type PublicUser = Omit<DatabaseUser, "password">