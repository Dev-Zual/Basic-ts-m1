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

type NextLevelDeveloper = JuniorDeveloper & {
  leaderShipExperience: number;
};

const developer: NextLevelDeveloper = {
  name: "next level",
  expertise: "typescript",
  experience: 2,
  leaderShipExperience: 1,
};
