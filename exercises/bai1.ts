import { Exercise } from "@/types/exercise";

// lop Person voi thuoc tinh name va age
export class Person {
  constructor(public name: string, public age: number) {}

  display(): string {
    return `Ten: ${this.name}, Tuoi: ${this.age}`;
  }
}

export const bai01: Exercise = {
  id: 1,
  title: "Bai 1: Class Person",
  description: "Create a class Person with attributes name and age. Write a method to display this information.",
  code: `export class Person {
  constructor(public name: string, public age: number) {}
  display(): string {
    return \`Ten: \${this.name}, Tuoi: \${this.age}\`;
  }
}
const p = new Person("Nguyen Van A", 20);
console.log(p.display());`,
  run: () => new Person("Nguyen Van A", 20).display()
};