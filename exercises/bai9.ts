import { Exercise } from "@/types/exercise";

// interface Animal va class Cat thuc thi
export interface Animal {
  name: string;
  sound(): string;
}

export class Cat implements Animal {
  constructor(public name: string) {}

  sound(): string {
    return "Meow meow!";
  }
}

export const bai09: Exercise = {
  id: 9,
  title: "Bai 9: Interface Animal",
  description: "Define an interface Animal with name and method sound().",
  code: `export interface Animal {
  name: string;
  sound(): string;
}

export class Cat implements Animal {
  constructor(public name: string) {}

  sound(): string {
    return "Meow meow!";
  }
}

const cat = new Cat("Meo Muop");
console.log(cat.sound());`,
  run: () => {
    const cat = new Cat("Meo Muop");
    return `${cat.name} keu: ${cat.sound()}`;
  }
};