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

class Employee {
  constructor(public name: string, public age: number) {
    this.age = age;
    this.name = name;
  }

  printName(): void {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }
}

class Manager extends Employee {
  constructor(name: string, age: number, public department: string) {
    super(name, age);
    this.department = department;
  }

  printDepartment(): void {
    console.log(`I am a manager of ${this.department} department`);
  }
}

const manager = new Manager("Alice", 30, "Engineering");

console.log(manager === Employee.prototype); // false, manager is an instance of Manager, not Employee
console.log(manager instanceof Employee); // true, manager is an instance of Employee through inheritance

console.log(manager.name);
manager.printName();
manager.printDepartment();



