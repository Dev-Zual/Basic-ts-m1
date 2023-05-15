interface Model<IData, IMethod> {
  data: IData;
  method: IMethod;
}

// property
interface IUser {
  firstName: string;
  lastName: string;
}

// methods
interface IMethods {
  fullName(): string;
}

type model = Model<IUser, IMethods>;

class User implements model {
  data: IUser;
  method: IMethods;
  constructor(firstName: string, lastName: string) {
    this.data = { firstName, lastName };
    this.method = {
      fullName: () => `${firstName} ${lastName}`,
    };
  }
}

const user1 = new User("zual", "rana");
console.log(user1.method.fullName());
