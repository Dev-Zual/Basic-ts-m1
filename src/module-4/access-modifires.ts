class BankAccount {
  id: number;
  name: string;
  balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
}

const myAccount = new BankAccount(111, "zual", 222);
myAccount.balance = 0;
console.log(myAccount);
