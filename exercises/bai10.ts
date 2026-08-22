import { Exercise } from "@/types/exercise";

// lop Account su dung public, private va readonly
export class Account {
  public username: string;
  private secretKey: string;
  readonly createdAt: Date;

  constructor(username: string, secretKey: string) {
    this.username = username;
    this.secretKey = secretKey;
    this.createdAt = new Date();
  }

  getSecret(): string {
    return this.secretKey;
  }
}

export const bai10: Exercise = {
  id: 10,
  title: "Bai 10: Public, Private & Readonly fields",
  description: "Create a class Account with public, private and readonly fields.",
  code: `export class Account {
  public username: string;
  private secretKey: string;
  readonly createdAt: Date;

  constructor(username: string, secretKey: string) {
    this.username = username;
    this.secretKey = secretKey;
    this.createdAt = new Date();
  }
}

const acc = new Account("tantai237", "PASS_123");
console.log(acc.username, acc.createdAt);`,
  run: () => {
    const acc = new Account("tantai237", "PASS_123");
    return `Username: ${acc.username} | Ngay tao: ${acc.createdAt.toLocaleDateString()}`;
  }
};