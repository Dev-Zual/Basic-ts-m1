// array tuple
const userInfo: [number, string, string, boolean, string] = [
  101,
  "ema",
  "john",
  true,
  "2023",
];

function matchArrayNumber(array1: number[], array2: number[]): number[] {
  let value = [];
  for (const n of array1) {
    for (const n2 of array2) {
      if (n === n2) {
        value.push(n);
      }
    }
  }
  return value;
}

const result4 = matchArrayNumber([1, 2, 3, 4, 5], [2, 4, 6, 8, 5]);
console.log(result4);

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

// function getFood<T, X>(arr: T[], param: X): T {}

// const product1: Product = {
//   id: 1,
//   name: "apple",
//   price: 12,
//   category: "apple",
// };
// const product2: Product = {
//   id: 1,
//   name: "banana",
//   price: 12,
//   category: "banana",
// };
// getFood([product1, product2], "apple");
