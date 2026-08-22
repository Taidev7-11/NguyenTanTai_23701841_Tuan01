import { Exercise } from "@/types/exercise";

// Interface Movable
export interface Movable {
  move(): string;
}

export class MovingCar implements Movable {
  move(): string {
    return "O to dang lan banh tren cao toc";
  }
}

export class MovingRobot implements Movable {
  move(): string {
    return "Robot dang di chuyen bang 2 chan tu dong";
  }
}

export const bai29: Exercise = {
  id: 29,
  title: "Bai 29: Interface Movable (Car & Robot)",
  description: "Create an interface Movable with method move(). Implement it in Car and Robot.",
  code: `export interface Movable { move(): string; }

export class MovingCar implements Movable {
  move(): string { return "O to dang di chuyen"; }
}

export class MovingRobot implements Movable {
  move(): string { return "Robot dang di chuyen"; }
}`,
  run: () => {
    return `${new MovingCar().move()} | ${new MovingRobot().move()}`;
  }
};