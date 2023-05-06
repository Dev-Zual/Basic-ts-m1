let emni: any;

emni = "next level";

(emni as string).length;

function kgToGram(param: number | string): number | string | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return value;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

console.log(kgToGram(10) as number);
