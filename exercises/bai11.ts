import { Exercise } from "@/types/exercise";

// lop cha Animal va hai lop con Dog, Cat
export class AnimalBase {
  constructor(public name: string) {}
}

export class Dog extends AnimalBase {
  bark(): string {
    return "Woof woof!";
  }
}

export class CatChild extends AnimalBase {
  meow(): string {
    return "Meow meow!";
  }
}

export const bai11: Exercise = {
  id: 11,
  title: "Bai 11: Base class Animal with Dog & Cat",
  description: "Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().",
  code: `export class AnimalBase {
  constructor(public name: string) {}
}

export class Dog extends AnimalBase {
  bark(): string { return "Woof woof!"; }
}

export class CatChild extends AnimalBase {
  meow(): string { return "Meow meow!"; }
}

const dog = new Dog("Cun");
const cat = new CatChild("Miu");
console.log(dog.bark(), cat.meow());`,
  run: () => {
    const dog = new Dog("Cun");
    const cat = new CatChild("Miu");
    return `${dog.name}: ${dog.bark()} | ${cat.name}: ${cat.meow()}`;
  }
};