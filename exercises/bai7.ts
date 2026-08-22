import { Exercise } from "@/types/exercise";

// lop User co private property va getter setter
export class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value.trim();
  }
}

export const bai07: Exercise = {
  id: 7,
  title: "Bai 7: Private property name & Getter/Setter",
  description: "Write a class User with private property name and getter/setter.",
  code: `export class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value.trim();
  }
}

const user = new User("Tai Nguyen");
user.name = "Nguyen Tan Tai";
console.log(user.name);`,
  run: () => {
    const user = new User("Tai Nguyen");
    user.name = "Nguyen Tan Tai";
    return `Ten nguoi dung: ${user.name}`;
  }
};