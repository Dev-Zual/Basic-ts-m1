// make the numbers array in string array
const arrayNumbers = [1, 2, 3, 4, 5, 6];
const arrayString = arrayNumbers.map((n) => n.toString());
console.log(arrayString);

type Volume = {
  height: number;
  width: number;
  depth: string;
};

type Area<T> = {
  //   [key in keyof Volume]: Volume[key];
  [key in keyof T]: T[key];
};

const area1: Area<{ name: string }> = {
  name: "xudlf",
};

type AreaString = {
  height: string;
  width: string;
};

// const rectangularArea: Volume = {
//   height: 20,
//   width: 12,
// };

// type A = AreaNumber['height']

type Address<T> = {
  [k in keyof T]: T[k];
};

const Add1: Address<{ city: string; district: string; road: number }> = {
  city: "dhaka",
  district: "jamalpur",
  road: 121,
};

function getArrayItem<T, K extends keyof T>(
  arr: T[],
  index: number,
  key: K
): T[K] {
  const item = arr[index];

  return item[key];
}

const userss = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
];

console.log(getArrayItem(userss, 0, "name"));

// type Data = { num1: number };
// type B = {
//   [key in keyof Data]: string;
// };

// const numbers: B = {
//   num1: 20,
// };

interface Person {
  firstName: string;

  lastName: string;
}
function fullName<T extends Person>(person: T): string {
  return `${person.firstName} ${person.lastName}`;
}

console.log(fullName<Person>({ firstName: "zual", lastName: "rana" }));
