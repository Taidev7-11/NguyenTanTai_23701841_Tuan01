import { Exercise } from "@/types/exercise";

// lop minh hoa Da hinh (Polymorphism)
export class BasePet {
  makeSound(): string {
    return "Tieng keu dong vat";
  }
}

export class DogPet extends BasePet {
  makeSound(): string {
    return "Gau gau!";
  }
}

export class DuckPet extends BasePet {
  makeSound(): string {
    return "Quap quap!";
  }
}

export const bai19: Exercise = {
  id: 19,
  title: "Bai 19: Method overriding & Polymorphism",
  description: "Demonstrate method overriding using polymorphism with Animal and subclasses.",
  code: `export class BasePet { makeSound() { return "Dong vat"; } }
export class DogPet extends BasePet { makeSound() { return "Gau gau!"; } }
export class DuckPet extends BasePet { makeSound() { return "Quap quap!"; } }

const pets: BasePet[] = [new DogPet(), new DuckPet()];
pets.forEach(p => console.log(p.makeSound()));`,
  run: () => {
    const pets: BasePet[] = [new DogPet(), new DuckPet()];
    return pets.map((p) => p.makeSound()).join(" --- ");
  }
};