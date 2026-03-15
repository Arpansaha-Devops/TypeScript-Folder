let arr : number[]  = [1,2,3,4,5]; 
console.log(arr)

let arr2 : (string | number)[] = [1,2,3,"four","five"]; // here we are declaring an array which can hold both string and number data types
console.log(arr2)

let numArr : Array<number> = [1,2,3,4,5]; // this is another way to declare an array in typescript using generics
console.log(numArr)

let strArr : Array<string> = ["one","two","three","four","five"]; // this is another way to declare an array in typescript using generics
console.log(strArr)

let mixedArr : Array<string | number> = [1,2,3,"four","five"]; // this is another way to declare an array in typescript using generics which can hold both string and number data types
console.log(mixedArr)   
