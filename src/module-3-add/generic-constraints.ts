// // generic in spreed operator

// interface MandatoryInterface {
//   name: string;
//   age: number;
//   salary: number;
// }

// const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
//   const myCrush = "kate winslet";
//   const newData = { ...myInfo, myCrush };
//   return newData;
// };

// type MyInfoType = {
//   name: string;
//   age: number;
//   salary: number;
//   other1: string;
//   other2: string;
// };

// const myInfo: MyInfoType = {
//   name: "zual",
//   age: 25,
//   salary: 100000000,
//   other1: "other1",
//   other2: "other2",
// };

// const result = addMeInMyCrushMind(myInfo);
