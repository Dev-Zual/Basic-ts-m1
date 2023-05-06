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
