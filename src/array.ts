const names : string[] = ["arpan", "tanmoy", "riya", "rukshita"]
const age : number[] = [22,24,21,22]

const Score : Array<number> = [98,96,85,92]

// Array of Obvjects ----

type metal = {
    name : string,
    weight : number,
    value ?: string | number
}


const metalObj :metal[] = [{
    name : "gold",
    weight : 20,
    // value : 80
}]



// ReadOnly Arrays ----

const city : readonly string[] = ["Delhi", "Pune", "Kolkata", "new York", "california"]

// city.push("mexico") // it is giving error because ofd readOnly keyword declared 


// MultiDimentional Arrays ---

const machine :number[][] = [
    [1,2,3],
    [4,5,6,7]
]


// Tuple in Ts ----

let chai  : [string,number];

chai = ["Arpan",22]  // we must follow the format 

const Tuple : readonly [string,number,boolean?] = ["arpan",100,true]  // this is know as read only tuples;

let name : [name :  string, age? : number];

name = ["arpan"]


