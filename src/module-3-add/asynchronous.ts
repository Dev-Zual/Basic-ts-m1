// //json placeholder fetching
// interface IToDo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }
// const getToDo = async (): Promise<IToDo> => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   return await res.json();
// };

// const getToDoData = async (): Promise<void> => {
//   const result = await getToDo();
//   console.log(result);
// };

// getToDoData();

// // mocking
// const makePromise = (): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     const data: string = "Data is fetched";
//     if (data) {
//       resolve(data);
//     } else reject("failed to fetched data!");
//   });
// };

// const getData = async (): Promise<string> => {
//   const data = await makePromise();
//   return data;
// };

// // boolean promise
// const makeBooleanPromise = (): Promise<boolean> => {
//   return new Promise<boolean>((resolve, reject) => {
//     const data: boolean = true;
//     if (data) {
//       resolve(data);
//     } else reject("failed to fetched data!");
//   });
// };

// const getData2 = async (): Promise<boolean> => {
//   const data = await makeBooleanPromise();
//   return data;
// };

// interface DataType {
//   data: string;
// }

// // object promise
// const makeObjectPromise = (): Promise<DataType> => {
//   return new Promise<DataType>((resolve, reject) => {
//     const data: DataType = { data: "data is fetched" };
//     if (data) {
//       resolve(data);
//     } else reject("failed to fetched data!");
//   });
// };

// const getData3 = async (): Promise<DataType> => {
//   const data = await makeObjectPromise();
//   return data;
// };
