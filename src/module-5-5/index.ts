// import object export
import jekono from "./module";
// import default export

// import divide from "./module";
// import * as Methods from "./module";

const add = (param1: number, param2: number, param3: number): number => {
  return param1 + param2 + param3;
};

// const res = Methods.average(11, 22);
// const res = divide(11, 22);
const res = jekono.average(11, 22);
