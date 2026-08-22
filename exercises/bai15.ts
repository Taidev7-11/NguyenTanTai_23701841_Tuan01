import { Exercise } from "@/types/exercise";
import { Book } from "./bai6";
import { User } from "./bai7";

// lop Library quan ly sach va nguoi dung
export class Library {
  private books: Book[] = [];
  private users: User[] = [];

  addBook(b: Book): void {
    this.books.push(b);
  }

  addUser(u: User): void {
    this.users.push(u);
  }

  getSummary(): string {
    return `Thu vien co ${this.books.length} quyen sach va ${this.users.length} thanh vien.`;
  }
}

export const bai15: Exercise = {
  id: 15,
  title: "Bai 15: Class Library",
  description: "Create a Library class that can store Book and User objects. Add method to add books.",
  code: `export class Library {
  private books: Book[] = [];
  private users: User[] = [];

  addBook(b: Book): void { this.books.push(b); }
  addUser(u: User): void { this.users.push(u); }
  getSummary(): string {
    return \`Thu vien co \${this.books.length} sach va \${this.users.length} user.\`;
  }
}`,
  run: () => {
    const lib = new Library();
    lib.addBook(new Book("TypeScript", "Author", 2024));
    lib.addUser(new User("Tai Nguyen"));
    return lib.getSummary();
  }
};