// // If a type is dependent on another type, it is called a conditional type.

// type a1 = null;
// type a3 = undefined;
// type a4 = number;
// type a2 = a1 extends string ? string : null;

// // nested conditional type
// type d = a1 extends number
//   ? number
//   : a3 extends number
//   ? number
//   : a4 extends null
//   ? null
//   : never;

// type Sheikh = {
//   wife1: string;
//   wife2: string;
// };
// type CheckProperty<X> = X extends keyof Sheikh ? true : false;
// type CheckWife1 = CheckProperty<"wife2">;

// // example 3
// type Bandhobi = "Monika" | "Rechel" | "kate";
// type RemoveBandhobi<T, K> = T extends K ? never : T;
// type CurrentBandhobi = RemoveBandhobi<Bandhobi, "Monika">;
