const age = 22;

// if (age > 18) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// ternary operator
const isAdult = age >= 19 ? "yes" : "no";

console.log(isAdult);

// nullish coalescing operator

const isAuthenticate = null;
const userName = isAuthenticate ?? "Guest";
console.log(userName);

type Manus = {
  name: string;
  address: {
    city: string;
    home?: string;
  };
};

const manus1: Manus = {
  name: "manus",
  address: {
    city: "ctiy",
  },
};

const home = manus1?.address?.home ?? "no home";
console.log(home);
