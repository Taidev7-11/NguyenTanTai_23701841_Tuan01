import { Exercise } from "@/types/exercise";

// Generic Repository
export class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

export const bai21: Exercise = {
  id: 21,
  title: "Bai 21: Generic Repository<T>",
  description: "Create a generic Repository class with methods add(), getAll().",
  code: `export class Repository<T> {
  private items: T[] = [];
  add(item: T): void { this.items.push(item); }
  getAll(): T[] { return this.items; }
}

const repo = new Repository<string>();
repo.add("Gia tri A");
repo.add("Gia tri B");`,
  run: () => {
    const repo = new Repository<string>();
    repo.add("Nguyen Tan Tai");
    repo.add("CNTT - KTPM19A");
    return `Cac phan tu trong Repo: [${repo.getAll().join(", ")}]`;
  }
};