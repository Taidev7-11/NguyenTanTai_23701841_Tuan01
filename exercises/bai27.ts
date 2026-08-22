import { Exercise } from "@/types/exercise";
import { Person } from "./bai1";

// Teacher ke thua Person
export class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }

  introduce(): string {
    return `Toi la giao vien ${this.name} (${this.age} tuoi), giang day mon: ${this.subject}.`;
  }
}

export const bai27: Exercise = {
  id: 27,
  title: "Bai 27: Class Teacher extends Person",
  description: "Create a class Teacher that extends Person. Add subject attribute and introduce method.",
  code: `export class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }

  introduce(): string {
    return \`Giao vien \${this.name} day mon \${this.subject}\`;
  }
}`,
  run: () => {
    const teacher = new Teacher("Thay Nguyen", 40, "Lap trinh Di dong");
    return teacher.introduce();
  }
};