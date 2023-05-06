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
