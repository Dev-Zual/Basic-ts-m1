// type PersonType = {
//   name: string;
//   age: number;
//   address: string;
// };

// type NewType = "name" | "age" | "address"; // manually

// type NewTypeKeyOf = keyof PersonType;

// // const a: NewType = 'address'
// // const b: NewTypeKeyOf = 'name'

// // generic keyof function
// function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
//   obj[key];
// }
// const property = getProperty({ name: "zual", age: 25 }, "age");
