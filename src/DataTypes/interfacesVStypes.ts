type car = {
    name : string,
    price : number,
    isElectric : boolean
}

type car = {
    name : number // we are getting error because we can't redeclare the same type with different properties.
}


interface bike {
    name : string,
    price : number,
    isElectric : boolean
}

interface bike {
   model : string // we can redeclare the same interface with different properties without getting any error.
}


