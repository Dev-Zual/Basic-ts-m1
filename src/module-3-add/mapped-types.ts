// make the numbers array in string array
const arrayNumbers = [1, 2, 3, 4, 5, 6];
const arrayString = arrayNumbers.map((n) => n.toString());
console.log(arrayString);

type Volume = {
  height: number;
  width: number;
  depth: string;
};

type Area = {
  [key in keyof Volume]: Volume[key];
};

type AreaString = {
  height: string;
  width: string;
};

const rectangularArea: Volume = {
  height: 20,
  width: 12,
};

// type A = AreaNumber['height']
