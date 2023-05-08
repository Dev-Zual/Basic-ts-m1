class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `${this.name} will sleep for ${hours} hours`;
  }
}

// student class extends Person class
class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student("mr. bean", 60, "america");
const studentSleep = student1.makeSleep(8);
console.log(studentSleep);

// teacher class
class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(takeClass: number): string {
    return `${this.name} will take ${takeClass} class`;
  }
}

const teacher1 = new Teacher("mr.kashem", 50, "uganda", "teacher");
teacher1.takeClass(4);
