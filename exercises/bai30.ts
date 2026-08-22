import { Exercise } from "@/types/exercise";
import { Student } from "./bai2";
import { Teacher } from "./bai27";

// Class School quan ly danh sach Student va Teacher
export class School {
  constructor(
    public name: string,
    public students: Student[] = [],
    public teachers: Teacher[] = []
  ) {}

  display(): string {
    return `Truong: ${this.name} | Giao vien: ${this.teachers.length} nguoi | Hoc sinh: ${this.students.length} nguoi`;
  }
}

export const bai30: Exercise = {
  id: 30,
  title: "Bai 30: Class School with Students & Teachers",
  description: "Create a class School with list of Students and Teachers. Add method to display info.",
  code: `export class School {
  constructor(
    public name: string,
    public students: Student[] = [],
    public teachers: Teacher[] = []
  ) {}

  display(): string {
    return \`Truong: \${this.name} | GV: \${this.teachers.length} | HS: \${this.students.length}\`;
  }
}`,
  run: () => {
    const school = new School("Dai hoc Cong nghiep TP.HCM (IUH)", [
      new Student("Nguyen Tan Tai", 21, "DHKTPM19A"),
      new Student("Tran Van B", 20, "DHKTPM19B")
    ], [
      new Teacher("Thay A", 45, "Kien truc phan mem")
    ]);
    return school.display();
  }
};