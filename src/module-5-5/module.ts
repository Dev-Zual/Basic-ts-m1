const add = (param1: number, param2: number): number => {
  return param1 + param2;
};
const substract = (param1: number, param2: number): number => {
  return param1 - param2;
};
const multiply = (param1: number, param2: number): number => {
  return param1 * param2;
};
const divide = (param1: number, param2: number): number => {
  return param1 / param2;
};
export const average = (param1: number, param2: number): number => {
  return param1 + param2 / 2;
};

// export default divide;
export default {
  add,
  substract,
  multiply,
  divide,
  average,
};
