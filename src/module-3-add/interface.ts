type User = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  role: string;
}

const extendedUser: IExtendedUser = {
  name: "zual",
  age: 25,
  role: "admin",
};

// const userWithTypeAlias:User =  {
//     name: 'zual',
//     age: 25
// }

// declare function type with alias
type addType = (num1: number, num2: number) => number;

// with interface
interface IAdd {
  (num1: number, num2: number): number;
}

const addtwo: IAdd = (num1, num2): number => {
  return num1 + num2;
};
