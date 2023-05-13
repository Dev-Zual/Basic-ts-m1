// key of guard
type Alphaneumeric = string | number;
function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

// in guard
type NormalUserType = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUserType | AdminUser): string {
  if ("role" in user) {
    return `hello i'm an ${user.role}`;
  } else {
    return "hello i'm normal user";
  }
}

const normalUser1 = { name: "Mr. Normal" };
const adminUser1 = { name: "Mr. Admin", role: "admin" };

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));

// instanceof guard

class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound(): void {
    console.log("im making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark(): void {
    console.log("im barking");
  }
}
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMew(): void {
    console.log("im mew");
  }
}

function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}
function isCat(animal: Animal): animal is Cat {
  return animal instanceof Cat;
}

function getAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMew();
  } else {
    animal.makeSound();
  }
}

const animal1 = new Dog("german", "dog1"); // instance -> dog
const animal2 = new Cat("deshi", "cat"); // instance -> cat

getAnimal(animal2);
