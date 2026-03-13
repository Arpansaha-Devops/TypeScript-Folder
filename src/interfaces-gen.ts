// interface chai {
//     name : string;
//     price : number;
//     quantity : number;
// }

// const chai1 : chai = {
//     name : "Masala Chai",
//     price : 20,
//     quantity : 1
// }


// const chai2 : chai = {
//     name : "Ginger Chai",
//     price : 25,
//     quantity : 2
// }

// console.log(chai1);
// console.log(chai2);


// interface person {
//   readonly  name : string;
//     age : number;
//     city : string;
//     profession : string;
// }   

// const person1 : person = {
//     name : "Arpan",
//     age : 22,
//     city : "Delhi",
//     profession : "Software Engineer"
// }

// person1.name = "Tanmoy" // it is giving error because of readonly keyword declared


interface Hello {
    strat() : void;
    stop() : void;
}

const car : Hello = {
    strat() {
        console.log("Car is starting");
    },
    stop() {
        console.log("Car is stopping");
    }
}

car.strat();
car.stop(); // we can use the methods of the interface in the object car because it is implementing the interface Hello



interface chai{
    (name : string, price : number, quantity : number) : void;
}

const chai3 : chai = (name : string, price : number, quantity : number) => {
    console.log(`Name : ${name}, Price : ${price}, Quantity : ${quantity}`);
}

chai3("Lemon Chai", 30, 3); // 


// Merge interface person 

interface person {
    name : string;
    age : number;
}   

interface person {
    city : string;
    profession : string;
}

const person2 : person = {
    name : "Tanmoy",
    age : 25,
    city : "Kolkata",
    profession : "Data Scientist"
}

console.log(person2); // we can merge two interfaces with the same name and use it in the object person2


// alternative way to merge interfaces

interface person {
    name : string;
    age : number;
}               

interface person {
    city : string;
    profession : string;
}

const person3 : person & person = {
    name : "Tanmoy",
    age : 25,
    city : "Kolkata",
    profession : "Data Scientist"
}
console.log(person3); // we can also merge two interfaces with the same name using the intersection type & and use it in the object person3


// extends interface 

interface vehicle {
    name : string;
    price : number;
}

interface car {
    model : string; 
}

interface bike extends vehicle, car {
    type : string;
}   

const bike1 : bike = {
    name : "Royal Enfield",
    price : 150000,
    type : "Cruiser",
    model : "Classic 350"
}
console.log(bike1);