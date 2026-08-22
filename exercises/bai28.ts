import { Exercise } from "@/types/exercise";

// Lop AnimalProtected dung phuong thuc protected
export class AnimalProtected {
  protected makeSound(): string {
    return "Am thanh dong vat co ban";
  }
}

export class GuardDog extends AnimalProtected {
  bark(): string {
    return `Tieng sua: ${this.makeSound()} -> Gau gau hung du!`;
  }

  protected makeSound(): string {
    return "Gauuuu";
  }
}

export const bai28: Exercise = {
  id: 28,
  title: "Bai 28: Protected method makeSound()",
  description: "Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.",
  code: `export class AnimalProtected {
  protected makeSound(): string { return "Am thanh"; }
}

export class GuardDog extends AnimalProtected {
  bark(): string { return \`Cho sua: \${this.makeSound()}\`; }
  protected makeSound(): string { return "Gau gau!"; }
}`,
  run: () => {
    return new GuardDog().bark();
  }
};