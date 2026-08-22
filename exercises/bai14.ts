import { Exercise } from "@/types/exercise";

// lop co so Employee va cac lop ke thua
export class Employee {
  constructor(public name: string, public salary: number) {}
}

export class Manager extends Employee {
  manage(): string {
    return `${this.name} dang phan cong cong viec cho team`;
  }
}

export class Developer extends Employee {
  code(): string {
    return `${this.name} dang viet code Next.js`;
  }
}

export const bai14: Exercise = {
  id: 14,
  title: "Bai 14: Employee -> Manager & Developer",
  description: "Create a base class Employee. Extend Manager and Developer with specific methods.",
  code: `export class Employee {
  constructor(public name: string, public salary: number) {}
}

export class Manager extends Employee {
  manage(): string { return \`\${this.name} dang quan ly\`; }
}

export class Developer extends Employee {
  code(): string { return \`\${this.name} dang code\`; }
}`,
  run: () => {
    const m = new Manager("Nguyen Van A", 2500);
    const d = new Developer("Nguyen Tan Tai", 1800);
    return `${m.manage()} | ${d.code()}`;
  }
};