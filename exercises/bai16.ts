import { Exercise } from "@/types/exercise";

// Generic class Box chua bat ky kieu du lieu nao
export class Box<T> {
  constructor(private value: T) {}

  getValue(): T {
    return this.value;
  }
}

export const bai16: Exercise = {
  id: 16,
  title: "Bai 16: Generic class Box<T>",
  description: "Create a generic class Box that can store any type of value.",
  code: `export class Box<T> {
  constructor(private value: T) {}
  getValue(): T { return this.value; }
}

const numberBox = new Box<number>(100);
const stringBox = new Box<string>("Hello TypeScript");`,
  run: () => {
    const numberBox = new Box<number>(100);
    const stringBox = new Box<string>("Hello TypeScript");
    return `Box<number>: ${numberBox.getValue()} | Box<string>: "${stringBox.getValue()}"`;
  }
};