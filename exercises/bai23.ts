import { Exercise } from "@/types/exercise";

// Interface Payment va cac hinh thuc thanh toan
export interface Payment {
  pay(amount: number): string;
}

export class CashPayment implements Payment {
  pay(amount: number): string {
    return `Thanh toan bang tien mat: ${amount.toLocaleString()} VND`;
  }
}

export class CardPayment implements Payment {
  pay(amount: number): string {
    return `Thanh toan bang the tin dung: ${amount.toLocaleString()} VND`;
  }
}

export const bai23: Exercise = {
  id: 23,
  title: "Bai 23: Payment interface (Cash & Card)",
  description: "Create an interface Payment with method pay(amount). Implement CashPayment and CardPayment.",
  code: `export interface Payment { pay(amount: number): string; }

export class CashPayment implements Payment {
  pay(amount: number) { return \`Tien mat: \${amount} VND\`; }
}

export class CardPayment implements Payment {
  pay(amount: number) { return \`The: \${amount} VND\`; }
}`,
  run: () => {
    return `${new CashPayment().pay(50000)} | ${new CardPayment().pay(250000)}`;
  }
};