// //generic function

// const createArray = <T>(param: T): T[] => {
//   return [param];
// };

// createArray<string>("zual");
// createArray<number>(232);

// interface NameInterFace {
//   name: string;
// }
// createArray<NameInterFace>({ name: "bangladesh" });

// // generic function tuple
// const createArray1 = <X, Y>(param: X, param2: Y): [X, Y] => {
//   return [param, param2];
// };
// createArray1<string, string>("zual", "i love my country");
// createArray1<number, Array<string>>(232, ["USA"]);

// // generic in spreed operator

// const addMeInMyCrushMind = <T>(myInfo: T) => {
//   const myCrush = "kate winslet";
//   const newData = { ...myInfo, myCrush };
//   return newData;
// };

// const myInfo = {
//   name: "zual",
//   age: 25,
//   salary: 100000000,
// };

// const result = addMeInMyCrushMind(myInfo);

// // normal function generic
// function createArray3<X, Y>(param: X, param2: Y): [X, Y] {
//   return [param, param2];
// }
// createArray3<string, string>("zual", "nasima");
// createArray3<string, Array<number>>("zual", [123]);
