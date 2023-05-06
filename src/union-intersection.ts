type NoobDeveloper = {
  name: string;
};

// type JuniorDeveloper = {
//   name: string;
//   expertise: string;
//   experience: number;
// };

//intersection
type JuniorDeveloper = NoobDeveloper & {
  name: string;
  expertise: string;
  experience: number;
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "zual",
};
