function add(num1: number, num2: number): number {
  return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;

const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "zual",
  balance: 3,
  addBalance(money: number) {
    console.log(this.balance + money);
  },
};
