import { Exercise } from "@/types/exercise";

// hai interface Flyable va Swimmable
export interface Flyable {
  fly(): string;
}

export interface Swimmable {
  swim(): string;
}

export class Bird implements Flyable {
  fly(): string {
    return "Chim dang bay tren bau troi";
  }
}

export class Fish implements Swimmable {
  swim(): string {
    return "Ca dang boi duoi dai duong";
  }
}

export const bai12: Exercise = {
  id: 12,
  title: "Bai 12: Interfaces Flyable & Swimmable",
  description: "Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.",
  code: `export interface Flyable { fly(): string; }
export interface Swimmable { swim(): string; }

export class Bird implements Flyable {
  fly(): string { return "Chim dang bay"; }
}

export class Fish implements Swimmable {
  swim(): string { return "Ca dang boi"; }
}`,
  run: () => {
    const b = new Bird();
    const f = new Fish();
    return `${b.fly()} | ${f.swim()}`;
  }
};