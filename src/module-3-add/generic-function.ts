//generic function

const createArray = <T>(param: T): T[] => {
  return [param];
};

createArray<string>("zual");
createArray<number>(232);

interface NameInterFace {
  name: string;
}
createArray<NameInterFace>({ name: "bangladesh" });

// generic function tuple
const createArray1 = <X, Y>(param: X, param2: Y): [X, Y] => {
  return [param, param2];
};

createArray1<string, string>("zual", "i love my country");
createArray1<number, Array<string>>(232, ["USA"]);
