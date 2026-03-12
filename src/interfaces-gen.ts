interface chai {
    name : string;
    price : number;
    quantity : number;
}

const chai1 : chai = {
    name : "Masala Chai",
    price : 20,
    quantity : 1
}


const chai2 : chai = {
    name : "Ginger Chai",
    price : 25,
    quantity : 2
}

console.log(chai1);
console.log(chai2);


interface person {
  readonly  name : string;
    age : number;
    city : string;
    profession : string;
}   

const person1 : person = {
    name : "Arpan",
    age : 22,
    city : "Delhi",
    profession : "Software Engineer"
}

// person1.name = "Tanmoy" // it is giving error because of readonly keyword declared