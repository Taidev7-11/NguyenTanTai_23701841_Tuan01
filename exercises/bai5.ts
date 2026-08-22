import { Exercise } from "@/types/exercise";

// lop BankAccount quan ly so du, nap va rut tien
export class BankAccount {
  constructor(public balance: number = 0) {}

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): boolean {
    if (amount > this.balance) return false;
    this.balance -= amount;
    return true;
  }
}

export const bai05: Exercise = {
  id: 5,
  title: "Bai 5: BankAccount deposit & withdraw",
  description: "Create a class BankAccount with balance. Add methods deposit() and withdraw().",
  code: `export class BankAccount {
  constructor(public balance: number = 0) {}

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): boolean {
    if (amount > this.balance) return false;
    this.balance -= amount;
    return true;
  }
}

const acc = new BankAccount(1000);
acc.deposit(500);
acc.withdraw(200);
console.log(acc.balance);`,
  run: () => {
    const acc = new BankAccount(1000);
    acc.deposit(500);
    acc.withdraw(200);
    return `So du hien tai: ${acc.balance}`;
  }
};