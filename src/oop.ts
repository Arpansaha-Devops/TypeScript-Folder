// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//     console.log(this)  // this will print the current instance of the class when we create an object of the class it will print the object with all the properties and methods of the class
//   }

//   greet(): void {
//     console.log(`Hello my name is ${this.name}`);
//   }
// }

// const user = new Person("Arpan", 22);
// user.greet();





// Public Access Modifier ----

// class Employee {
//   constructor(public name: string, public age: number) {
//     this.age = age;
//     this.name = name;
//   }

//   printName(): void {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   }
// }

// class Manager extends Employee {  // Manager class is inheriting the properties and methods of Employee class
//   constructor(name: string, age: number, public department: string) {
//     super(name, age);
//     this.department = department;
//   }

//   printDepartment(): void {
//     console.log(`I am a manager of ${this.department} department`);
//   }
// }

// const manager = new Manager("Alice", 30, "Engineering");

// console.log(manager === Employee.prototype); // false, manager is an instance of Manager, not Employee
// console.log(manager instanceof Employee); // true, manager is an instance of Employee through inheritance

// console.log(manager.name);
// manager.printName();
// manager.printDepartment();




// Private Access Modifier ----

class Employee1 {
  constructor(private name : string, private age : number){
    this.name = name;
    this.age = age;
  }

  printName(): void {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }


}


class Manegaer1 extends Employee1 {
  constructor(name: string, age: number, private department: string) {
    super(name, age);
    this.department = department;
  }

  printDepartment(): void {
    console.log(`I am a manager of ${this.department} department`);
  }
}


const employee = new Employee1("Bob", 25);
// console.log(employee.name); // Error: Property 'name' is private and only accessible within class 'Employee1'.
// employee.printName(); // This will work because printName is a method of the Employee1 class and it can access the private properties of the class.


const manager = new Manegaer1("Alice", 30, "Engineering");
manager.printDepartment(); // This will work because printDepartment
manager.printName() // This will work because printName is a method of the Employee1 class and it can access the private properties of the class through inheritance.By super keyword we are calling the constructor of the parent class and passing the name and age to it.