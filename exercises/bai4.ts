import { Exercise } from "@/types/exercise";

// lop Rectangle tinh chu vi va dien tich
export class Rectangle {
  constructor(public width: number, public height: number) {}

  getArea(): number {
    return this.width * this.height;
  }
  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

export const bai04: Exercise = {
  id: 4,
  title: "Bai 4: Rectangle Area & Perimeter",
  description: "Create a class Rectangle with width and height. Write a method to calculate area and perimeter.",
  code: `export class Rectangle {
  constructor(public width: number, public height: number) {}

  getArea(): number {
    return this.width * this.height;
  }
  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const r = new Rectangle(10, 5);
console.log(\`S: \${r.getArea()}, P: \${r.getPerimeter()}\`);`,
  run: () => {
    const r = new Rectangle(10, 5);
    return `Dien tich: ${r.getArea()}, Chu vi: ${r.getPerimeter()}`;
  }
};