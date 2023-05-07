// generic interface
interface CrushInterface<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}
const crush: CrushInterface<boolean> = {
  name: "kate winslet",
  husband: true,
};
const crush2: CrushInterface<string> = {
  name: "kate",
  husband: "yes",
};

// generic type
type GenericArray<T> = Array<T>;
const rollNumbers1: GenericArray<number> = [1, 2, 3, 4, 5];
const rollNumbers2: GenericArray<string> = ["1", "2", "3"];
const rollNumbers3: GenericArray<boolean> = [true, false];
// array of object generic
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

// tuple generic
type GenericTuple<x, y> = [x, y];
const relation: GenericTuple<string, string> = ["zual", "na"];

interface IRelationWithSalary {
  name: string;
  salary: number;
}

const relationWithSalary: GenericTuple<IRelationWithSalary, string> = [
  {
    name: "zual",
    salary: 10000000,
  },
  "mrs. y",
];
