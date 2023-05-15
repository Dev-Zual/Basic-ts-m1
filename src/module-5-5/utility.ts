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
