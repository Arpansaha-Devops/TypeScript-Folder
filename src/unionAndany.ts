let num : string | number = "Arpan";

num = 10000000000000;

console.log(num)  // this is called union datatypes means it can also be a string or number we assigned



let apiRequest : "pending" | "fullfiled" | "error" = "pending"

// apiRequest = "done" // error because we have already defined the datatypes we cannot change them 



// let arr = ["20","40","60","80"];

// let result = []

// for (const key of arr) {
//     if (key === "80") {
//         result.push(key)
//         break
//     }
// }

// console.log(result)


type teaType = "masala" | "ginger" | "elichi";

function printTea(tea:teaType) {
    console.log(tea)
}

let tea : teaType = "elichi";
printTea(tea)