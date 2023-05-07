// generic type
type GenericArray<T> = Array<T>;

const rollNumbers1: GenericArray<number> = [1, 2, 3, 4, 5];
const rollNumbers2: GenericArray<string> = ["1", "2", "3"];
const rollNumbers3: GenericArray<boolean> = [true, false];

type NameRollType = {
  name: string;
  roll: number;
};

const userRollAndName: GenericArray<NameRollType> = [
  {
    name: "mr. y",
    roll: 1,
  },
  {
    name: "mr. z",
    roll: 2,
  },
];
