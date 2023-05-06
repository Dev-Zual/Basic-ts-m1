const searchName = (value: string | null) => {
  if (value === null) {
    console.log("nothing to search");
  } else {
    console.log("searching...");
  }
};

searchName(null);

// unknown type
const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const converted = (speed * 1000) / 3600;
    console.log(`my speed is ${converted}`);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const converted = (parseFloat(value) * 1000) / 3600;
    console.log(`my speed is ${converted}`);
  }
};

getMyCarSpeed(10);
getMyCarSpeed("10 kmh");

// never type
function throwError(message: string): never {
  throw new Error(message);
}
throwError("not connected");
