import { Exercise } from "@/types/exercise";

// lop truu tuong Shape
export abstract class Shape {
  abstract area(): number;
}

export class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  area(): number {
    return this.side * this.side;
  }
}

export class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return +(Math.PI * this.radius * this.radius).toFixed(2);
  }
}

export const bai13: Exercise = {
  id: 13,
  title: "Bai 13: Abstract class Shape (Square & Circle)",
  description: "Create an abstract class Shape with method area(). Implement Square and Circle.",
  code: `export abstract class Shape {
  abstract area(): number;
}

export class Square extends Shape {
  constructor(public side: number) { super(); }
  area(): number { return this.side * this.side; }
}

export class Circle extends Shape {
  constructor(public radius: number) { super(); }
  area(): number { return +(Math.PI * this.radius * this.radius).toFixed(2); }
}`,
  run: () => {
    const s = new Square(4);
    const c = new Circle(3);
    return `Square (canh 4): S = ${s.area()} | Circle (r = 3): S = ${c.area()}`;
  }
};