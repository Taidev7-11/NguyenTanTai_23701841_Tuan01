import { Exercise } from "@/types/exercise";

// Cau truc du lieu Stack
export class Stack<T> {
  private data: T[] = [];

  push(item: T): void {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.pop();
  }

  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }
}

export const bai22: Exercise = {
  id: 22,
  title: "Bai 22: Stack (push, pop, peek, isEmpty)",
  description: "Create a class Stack with push, pop, peek, isEmpty methods.",
  code: `export class Stack<T> {
  private data: T[] = [];
  push(item: T): void { this.data.push(item); }
  pop(): T | undefined { return this.data.pop(); }
  peek(): T | undefined { return this.data[this.data.length - 1]; }
  isEmpty(): boolean { return this.data.length === 0; }
}`,
  run: () => {
    const s = new Stack<number>();
    s.push(10);
    s.push(20);
    s.push(30);
    const popped = s.pop();
    return `Stack vua pop: ${popped} | Phan tu tren cung (peek): ${s.peek()} | isEmpty: ${s.isEmpty()}`;
  }
};