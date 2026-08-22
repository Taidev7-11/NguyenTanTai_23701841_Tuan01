import { Exercise } from "@/types/exercise";
import { Person } from "./bai1"; // ke thua class Person tu bai 1

// lop Student ke thua Person va bo sung grade
export class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }

  display(): string {
    return `${super.display()}, Lop: ${this.grade}`;
  }
}

export const bai02: Exercise = {
  id: 2,
  title: "Bai 2: Class Student extends Person",
  description: "Write a class Student extending Person with an additional attribute grade. Add a method to display all info.",
  code: `export class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }
  display(): string {
    return \`\${super.display()}, Lop: \${this.grade}\`;
  }
}
const s = new Student("Nguyen Tan Tai", 21, "DHKTPM19A");
console.log(s.display());`,
  run: () => new Student("Nguyen Tan Tai", 21, "DHKTPM19A").display()
};