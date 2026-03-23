let str : string | number = "Hello";
str = 42; // This is valid because str can be either a string or a number

// str = true; // This will cause a TypeScript error because str cannot be a boolean

function printValue(value: string | number): void { 
    if (typeof value === "string") {
        console.log(`The string value is: ${value}`);
    } else {
        console.log(`The number value is: ${value}`);
    }
}
printValue("Hello, TypeScript!"); // Output: The string value is: Hello, TypeScript!
printValue(123); // Output: The number value is: 123


// type User = {   
//     name: string;
//     age: number;
//     email: string;
// };

// type Admin = {  
//     name: string;
//     role: string;
// };

// type Person = User | Admin;

// function printPersonInfo(person: Person): void {
//     console.log(`Name: ${person.name}`);    
//     if ("age" in person) {
//         console.log(`Age: ${person.age}`);
//     }   
//     if ("email" in person) {
//         console.log(`Email: ${person.email}`);

//     }
//     if ("role" in person) {
//         console.log(`Role: ${person.role}`);
//     }
// }

// printPersonInfo({ name: "Alice", age: 30, email: "alice@example.com" });
// printPersonInfo({ name: "Bob", role: "Administrator" });



class user{
    constructor(public name : string | boolean, public age: number, height ?: number ){
        this.name = name;
        this.age = age;

    }
   printUser() :void {
    console.log(`the name of the user is ${this.name} and the age of the user is :${this.age}`)
   }
}


const newUser = new user("arpan",20);

newUser.printUser()
