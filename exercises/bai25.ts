import { Exercise } from "@/types/exercise";

// Class ShapeStatic co static method describe
export class ShapeStatic {
  static describe(): string {
    return "Shape la lop truu tuong dai dien cho cac hinh hoc trong toan hoc.";
  }
}

export const bai25: Exercise = {
  id: 25,
  title: "Bai 25: Shape with static describe()",
  description: "Create a class Shape with a static method describe().",
  code: `export class ShapeStatic {
  static describe(): string {
    return "Shape la lop dai dien cho cac hinh hoc.";
  }
}

console.log(ShapeStatic.describe());`,
  run: () => ShapeStatic.describe()
};