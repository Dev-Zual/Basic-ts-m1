// Pick

interface Person {
  name: string;
  email: string;
  contactNo: number;
}

type Email = Pick<Person, "email">;
type ContactNo = Pick<Person, "contactNo">;
