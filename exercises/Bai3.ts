import { Exercise } from "@/types/exercise";

// lop Car luu thong tin xe
export class Car {
  constructor(public brand: string, public model: string, public year: number) {}

  showInfo(): string {
    return `Xe: ${this.brand} ${this.model}, Nam sx: ${this.year}`;
  }
}

export const bai03: Exercise = {
  id: 3,
  title: "Bai 3: Class Car",
  description: "Create a class Car with properties brand, model, year. Write a method to show car info.",
  code: `export class Car {
  constructor(public brand: string, public model: string, public year: number) {}
  showInfo(): string {
    return \`Xe: \${this.brand} \${this.model}, Nam sx: \${this.year}\`;
  }
}
const car = new Car("Toyota", "Camry", 2024);
console.log(car.showInfo());`,
  run: () => new Car("Toyota", "Camry", 2024).showInfo()
};