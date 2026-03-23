type car = {
    name : string,
    price : number,
    isElectric : boolean
}

// type car = {
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

class vehicle {
    constructor(public name : string, public price : number, public isElectric : boolean){
        this.name = name;
        this.price = price;
        this.isElectric = isElectric;
    }
}

const myCar = new vehicle("Tesla", 50000, true);
myCar.name = "Tesla Model 3"; // we can change the name of the car because we have declared the properties as public in the constructor of the class vehicle. 


function printCar(car:bike): void {
    console.log(`Bike Name: ${car.name}`);
    console.log(`Price: $${car.price}`);
    console.log(`Is Electric: ${car.isElectric ? "Yes" : "No"}`);
}

printCar({name : "Yamaha", price : 1500, isElectric : false, model : "YZF-R3"}) // here we are passing the object with the properties of the interface bike and also we are passing the model property which is declared in the same interface bike without getting any error because we can redeclare the same interface with different properties without getting any error.
