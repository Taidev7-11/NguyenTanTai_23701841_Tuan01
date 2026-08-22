import { Exercise } from "@/types/exercise";

// lop Book chua cac thuoc tinh sach
export class Book {
  constructor(
    public title: string,
    public author: string,
    public year: number
  ) {}

  getInfo(): string {
    return `Sach: "${this.title}" - Tac gia: ${this.author} (${this.year})`;
  }
}

export const bai06: Exercise = {
  id: 6,
  title: "Bai 6: Class Book",
  description: "Create a class Book with attributes title, author, year.",
  code: `export class Book {
  constructor(
    public title: string,
    public author: string,
    public year: number
  ) {}

  getInfo(): string {
    return \`Sach: "\${this.title}" - Tac gia: \${this.author} (\${this.year})\`;
  }
}

const book = new Book("Clean Code", "Robert C. Martin", 2008);
console.log(book.getInfo());`,
  run: () => {
    const book = new Book("Clean Code", "Robert C. Martin", 2008);
    return book.getInfo();
  }
};