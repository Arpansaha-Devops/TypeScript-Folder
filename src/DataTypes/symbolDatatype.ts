const id : symbol = Symbol("id");

const user = {
  name: "Arpan",
  [id]: 101  // this is how we can use symbol as a key in an object, we have to use the square brackets to access the value of the symbol key.
};

console.log(user[id]); // 101 


const s1 : symbol = Symbol("id");
const s2 : symbol = Symbol("id");

console.log(s1 === s2); // false


const s3 : symbol = Symbol.for("id");  // symbol.for is used to create a symbol that is shared across the entire codebase.
const s4 : symbol = Symbol.for("id");

console.log(s3 === s4); // true