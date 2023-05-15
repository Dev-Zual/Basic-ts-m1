// Pick type

interface Person {
  name: string;
  email: string;
  contactNo: number;
}

type Email = Pick<Person, "email">;
type ContactNo = Pick<Person, "contactNo">;
type Contact = Pick<Person, "contactNo" | "email">;

// Omit type
type Names = Omit<Person, "email" | "contactNo">;

// partial
// to make all the properties be optional type
type Optional = Partial<Person>;

// Required
// to make all the properties be required
type RequiredType = Required<Person>;

// Readonly
const person: Readonly<Person> = {
  name: "zual",
  email: "abc@gmail.com",
  contactNo: 111111,
};

person.name = "rana";

// record type

// type myObj = {
//     a:string,
//     b: string,
//     c:string
// }

// using index signature
// type myObj = {
//   [key: string]: string;
// };

// using Record
// type myObj = Record<string,string>
type myObj = Record<"a" | "b" | "c", string>;

const obj: myObj = {
  a: "1",
  b: "2",
  c: "3",
};
