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
