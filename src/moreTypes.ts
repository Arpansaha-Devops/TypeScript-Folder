let response : any = "42";

let responseLength : number = (response as string).length  // This is known as forceful Typeassertion ----


console.log(responseLength)



// type book = {
//     name : string
// }

// let bookString = '{"name" : "arpan"}';

// let bookObj = JSON.parse(bookString) as book  // "This as is known as TypeAssertion"

// console.log(bookObj.name)




// Difference Between any & unknown -----


let value : any = "arpan";

value = [1,2,3,4];
value = true;

// value.toUpperCase() // we don't get error mark because of "any" type



let name : unknown;

name = "Arpan"
name = 12;
name = true
// name.toUpperCase()  // here we are getting error line because of "unknown type";

// if we want to use toUpperCase we have to use gurd to do that ---

if (typeof name === "string") {
   console.log(name.toUpperCase());
   
}

console.log(name)



type Role = "admin" | "user" | 'SuperDashboard';

function redirectUser(role:Role) : void {
    if (role === "admin") {
        console.log("Redirecting User To Admin Dashboard...");
        return
    } else if (role === "user") {
       console.log("Redirecting User To User Dashboard..."); 
       return
    }
      role;
}

redirectUser("user")