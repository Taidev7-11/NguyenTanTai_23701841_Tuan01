import { Exercise } from "@/types/exercise"; // import kieu du lieu Exercise

export const exercises: Exercise[] = [
  // Bai 1: Class Person
  {
    id: 1,
    title: "Bai 1: Class Person",
    description: "Create a class Person with attributes name and age. Write a method to display this information.",
    code: `class Person {
  constructor(public name: string, public age: number) {}
  display(): string {
    return \`Ten: \${this.name}, Tuoi: \${this.age}\`;
  }
}
const p = new Person("Nguyen Van A", 20);
console.log(p.display());`,
    run: () => {
      class Person {
        constructor(public name: string, public age: number) {}
        display(): string {
          return `Ten: ${this.name}, Tuoi: ${this.age}`;
        }
      }
      const p = new Person("Nguyen Van A", 20);
      return p.display();
    }
  },

  // Bai 2: Class Student extends Person
  {
    id: 2,
    title: "Bai 2: Class Student extends Person",
    description: "Write a class Student extending Person with an additional attribute grade. Add a method to display all info.",
    code: `class Person {
  constructor(public name: string, public age: number) {}
  display(): string {
    return \`Ten: \${this.name}, Tuoi: \${this.age}\`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }
  display(): string {
    return \`\${super.display()}, Lop: \${this.grade}\`;
  }
}
const s = new Student("Nguyen Tan Tai", 21, "DHKTPM19A");
console.log(s.display());`,
    run: () => {
      class Person {
        constructor(public name: string, public age: number) {}
        display(): string {
          return `Ten: ${this.name}, Tuoi: ${this.age}`;
        }
      }
      class Student extends Person {
        constructor(name: string, age: number, public grade: string) {
          super(name, age);
        }
        display(): string {
          return `${super.display()}, Lop: ${this.grade}`;
        }
      }
      const s = new Student("Nguyen Tan Tai", 21, "DHKTPM19A");
      return s.display();
    }
  },

  // Bai 3: Class Car
  {
    id: 3,
    title: "Bai 3: Class Car",
    description: "Create a class Car with properties brand, model, year. Write a method to show car info.",
    code: `class Car {
  constructor(public brand: string, public model: string, public year: number) {}
  showInfo(): string {
    return \`Xe: \${this.brand} \${this.model}, Nam san xuat: \${this.year}\`;
  }
}
const car = new Car("Toyota", "Camry", 2024);
console.log(car.showInfo());`,
    run: () => {
      class Car {
        constructor(public brand: string, public model: string, public year: number) {}
        showInfo(): string {
          return `Xe: ${this.brand} ${this.model}, Nam san xuat: ${this.year}`;
        }
      }
      const car = new Car("Toyota", "Camry", 2024);
      return car.showInfo();
    }
  },

  // Bai 4: Rectangle
  {
    id: 4,
    title: "Bai 4: Rectangle Area & Perimeter",
    description: "Create a class Rectangle with width and height. Write a method to calculate area and perimeter.",
    code: `class Rectangle {
  constructor(public width: number, public height: number) {}
  getArea(): number { return this.width * this.height; }
  getPerimeter(): number { return 2 * (this.width + this.height); }
}
const rect = new Rectangle(10, 5);
console.log(\`Dien tich: \${rect.getArea()}, Chu vi: \${rect.getPerimeter()}\`);`,
    run: () => {
      class Rectangle {
        constructor(public width: number, public height: number) {}
        getArea(): number { return this.width * this.height; }
        getPerimeter(): number { return 2 * (this.width + this.height); }
      }
      const rect = new Rectangle(10, 5);
      return `Dien tich: ${rect.getArea()}, Chu vi: ${rect.getPerimeter()}`;
    }
  },

  // Bai 5: BankAccount
  {
    id: 5,
    title: "Bai 5: BankAccount deposit & withdraw",
    description: "Create a class BankAccount with balance. Add methods deposit() and withdraw().",
    code: `class BankAccount {
  constructor(public balance: number = 0) {}
  deposit(amount: number): string {
    this.balance += amount;
    return \`Gui: +\${amount}, So du: \${this.balance}\`;
  }
  withdraw(amount: number): string {
    if (amount > this.balance) return "So du khong du";
    this.balance -= amount;
    return \`Rut: -\${amount}, So du con lai: \${this.balance}\`;
  }
}`,
    run: () => {
      class BankAccount {
        constructor(public balance: number = 0) {}
        deposit(amount: number): void { this.balance += amount; }
        withdraw(amount: number): boolean {
          if (amount > this.balance) return false;
          this.balance -= amount;
          return true;
        }
      }
      const acc = new BankAccount(1000);
      acc.deposit(500);
      acc.withdraw(300);
      return `So du hien tai: ${acc.balance}`;
    }
  },

  // Bai 6: Book
  {
    id: 6,
    title: "Bai 6: Class Book",
    description: "Create a class Book with attributes title, author, year.",
    code: `class Book {
  constructor(public title: string, public author: string, public year: number) {}
  getInfo(): string {
    return \`Sach: "\${this.title}" cua tac gia \${this.author} (\${this.year})\`;
  }
}`,
    run: () => {
      class Book {
        constructor(public title: string, public author: string, public year: number) {}
        getInfo(): string {
          return `Sach: "${this.title}" cua tac gia ${this.author} (${this.year})`;
        }
      }
      const b = new Book("Lap trinh TypeScript", "John Doe", 2023);
      return b.getInfo();
    }
  },

  // Bai 7: Getter & Setter
  {
    id: 7,
    title: "Bai 7: Private property name & Getter/Setter",
    description: "Write a class User with private property name and getter/setter.",
    code: `class User {
  private _name: string;
  constructor(name: string) { this._name = name; }
  get name(): string { return this._name; }
  set name(val: string) { this._name = val.trim(); }
}`,
    run: () => {
      class User {
        private _name: string;
        constructor(name: string) { this._name = name; }
        get name(): string { return this._name; }
        set name(val: string) { this._name = val.trim(); }
      }
      const u = new User("Tai Nguyen");
      u.name = "Nguyen Tan Tai";
      return `Ten sau setter: ${u.name}`;
    }
  },

  // Bai 8: Product array filter
  {
    id: 8,
    title: "Bai 8: Filter Products with price > 100",
    description: "Create a Product class with name, price. Create an array of products and filter products with price > 100.",
    code: `class Product {
  constructor(public name: string, public price: number) {}
}
const list = [new Product("A", 50), new Product("B", 150), new Product("C", 200)];
const filtered = list.filter(p => p.price > 100);`,
    run: () => {
      class Product {
        constructor(public name: string, public price: number) {}
      }
      const list = [new Product("But", 50), new Product("Sach", 150), new Product("Cap sach", 200)];
      const filtered = list.filter(p => p.price > 100);
      return `Cac sp > 100: ` + filtered.map(p => `${p.name} ($${p.price})`).join(", ");
    }
  },

  // Bai 9: Interface Animal
  {
    id: 9,
    title: "Bai 9: Interface Animal",
    description: "Define an interface Animal with name and method sound().",
    code: `interface Animal {
  name: string;
  sound(): string;
}
class Cat implements Animal {
  constructor(public name: string) {}
  sound(): string { return "Meow meow"; }
}`,
    run: () => {
      interface Animal {
        name: string;
        sound(): string;
      }
      class Cat implements Animal {
        constructor(public name: string) {}
        sound(): string { return "Meow meow"; }
      }
      const cat = new Cat("Meo Muap");
      return `${cat.name} keu: ${cat.sound()}`;
    }
  },

  // Bai 10: Access modifiers
  {
    id: 10,
    title: "Bai 10: Public, Private & Readonly fields",
    description: "Create a class Account with public, private and readonly fields.",
    code: `class Account {
  public username: string;
  private secretKey: string;
  readonly createdAt: Date;

  constructor(username: string, key: string) {
    this.username = username;
    this.secretKey = key;
    this.createdAt = new Date();
  }
}`,
    run: () => {
      class Account {
        public username: string;
        private secretKey: string;
        readonly createdAt: Date;
        constructor(username: string, key: string) {
          this.username = username;
          this.secretKey = key;
          this.createdAt = new Date();
        }
        getSecret(): string { return this.secretKey; }
      }
      const acc = new Account("tantai237", "PASS1234");
      return `User: ${acc.username}, Ngay tao: ${acc.createdAt.toLocaleDateString()}`;
    }
  },

  // Bai 11: Dog and Cat
  {
    id: 11,
    title: "Bai 11: Base class Animal with Dog & Cat",
    description: "Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().",
    code: `class Animal { constructor(public name: string) {} }
class Dog extends Animal { bark() { return "Woof!"; } }
class Cat extends Animal { meow() { return "Meow!"; } }`,
    run: () => {
      class Animal { constructor(public name: string) {} }
      class Dog extends Animal { bark() { return "Woof woof!"; } }
      class Cat extends Animal { meow() { return "Meow meow!"; } }
      const d = new Dog("Cun");
      const c = new Cat("Miu");
      return `${d.name}: ${d.bark()} | ${c.name}: ${c.meow()}`;
    }
  },

  // Bai 12: Flyable and Swimmable
  {
    id: 12,
    title: "Bai 12: Interfaces Flyable & Swimmable",
    description: "Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.",
    code: `interface Flyable { fly(): string; }
interface Swimmable { swim(): string; }
class Bird implements Flyable { fly() { return "Bay tren troi"; } }
class Fish implements Swimmable { swim() { return "Boi duoi nuoc"; } }`,
    run: () => {
      interface Flyable { fly(): string; }
      interface Swimmable { swim(): string; }
      class Bird implements Flyable { fly() { return "Chim dang bay tren troi"; } }
      class Fish implements Swimmable { swim() { return "Ca dang boi duoi nuoc"; } }
      return `${new Bird().fly()} | ${new Fish().swim()}`;
    }
  },

  // Bai 13: Abstract Shape
  {
    id: 13,
    title: "Bai 13: Abstract class Shape (Square, Circle)",
    description: "Create an abstract class Shape with method area(). Implement Square and Circle.",
    code: `abstract class Shape { abstract area(): number; }
class Square extends Shape {
  constructor(public side: number) { super(); }
  area() { return this.side * this.side; }
}
class Circle extends Shape {
  constructor(public r: number) { super(); }
  area() { return Math.PI * this.r * this.r; }
}`,
    run: () => {
      abstract class Shape { abstract area(): number; }
      class Square extends Shape {
        constructor(public side: number) { super(); }
        area() { return this.side * this.side; }
      }
      class Circle extends Shape {
        constructor(public r: number) { super(); }
        area() { return +(Math.PI * this.r * this.r).toFixed(2); }
      }
      return `Hinh vuong (canh 4): S = ${new Square(4).area()} | Hinh tron (ban kinh 3): S = ${new Circle(3).area()}`;
    }
  },

  // Bai 14: Employee, Manager, Developer
  {
    id: 14,
    title: "Bai 14: Employee -> Manager & Developer",
    description: "Create a base class Employee. Extend Manager and Developer with specific methods.",
    code: `class Employee { constructor(public name: string, public salary: number) {} }
class Manager extends Employee { manage() { return \`\${this.name} dang quan ly du an\`; } }
class Developer extends Employee { code() { return \`\${this.name} dang viet code\`; } }`,
    run: () => {
      class Employee { constructor(public name: string, public salary: number) {} }
      class Manager extends Employee { manage() { return `${this.name} dang quan ly team`; } }
      class Developer extends Employee { code() { return `${this.name} dang viet code Next.js`; } }
      const m = new Manager("An", 2000);
      const d = new Developer("Tai", 1500);
      return `${m.manage()} | ${d.code()}`;
    }
  },

  // Bai 15: Library
  {
    id: 15,
    title: "Bai 15: Class Library",
    description: "Create a Library class that can store Book and User objects. Add method to add books.",
    code: `class Library {
  private books: string[] = [];
  addBook(b: string) { this.books.push(b); }
  getBooks() { return this.books; }
}`,
    run: () => {
      class Library {
        private books: string[] = [];
        addBook(book: string) { this.books.push(book); }
        getBooks() { return this.books.join(", "); }
      }
      const lib = new Library();
      lib.addBook("Clean Code");
      lib.addBook("Design Patterns");
      return `Thu vien gom: ${lib.getBooks()}`;
    }
  },

  // Bai 16: Generic Box
  {
    id: 16,
    title: "Bai 16: Generic class Box<T>",
    description: "Create a generic class Box that can store any type of value.",
    code: `class Box<T> {
  constructor(private content: T) {}
  getValue(): T { return this.content; }
}
const numBox = new Box<number>(100);
const strBox = new Box<string>("Hello TypeScript");`,
    run: () => {
      class Box<T> {
        constructor(private content: T) {}
        getValue(): T { return this.content; }
      }
      const numBox = new Box<number>(100);
      const strBox = new Box<string>("Hello TypeScript");
      return `Box 1: ${numBox.getValue()} | Box 2: ${strBox.getValue()}`;
    }
  },

  // Bai 17: Singleton Logger
  {
    id: 17,
    title: "Bai 17: Singleton Logger",
    description: "Write a singleton Logger class that logs messages to console.",
    code: `class Logger {
  private static instance: Logger;
  private constructor() {}
  public static getInstance(): Logger {
    if (!Logger.instance) Logger.instance = new Logger();
    return Logger.instance;
  }
  log(msg: string) { return \`[LOG]: \${msg}\`; }
}`,
    run: () => {
      class Logger {
        private static instance: Logger;
        private constructor() {}
        public static getInstance(): Logger {
          if (!Logger.instance) Logger.instance = new Logger();
          return Logger.instance;
        }
        log(msg: string) { return `[LOG]: ${msg}`; }
      }
      const logger1 = Logger.getInstance();
      const logger2 = Logger.getInstance();
      return `${logger1.log("Ghi log thanh cong")} (Cung 1 instance: ${logger1 === logger2})`;
    }
  },

  // Bai 18: Static MathUtil
  {
    id: 18,
    title: "Bai 18: Static class MathUtil",
    description: "Create a static class MathUtil with methods add(), subtract(), multiply(), divide().",
    code: `class MathUtil {
  static add(a: number, b: number) { return a + b; }
  static subtract(a: number, b: number) { return a - b; }
  static multiply(a: number, b: number) { return a * b; }
  static divide(a: number, b: number) { return b !== 0 ? a / b : "Khong chia duoc cho 0"; }
}`,
    run: () => {
      class MathUtil {
        static add(a: number, b: number) { return a + b; }
        static multiply(a: number, b: number) { return a * b; }
      }
      return `MathUtil.add(10, 20) = ${MathUtil.add(10, 20)} | MathUtil.multiply(5, 6) = ${MathUtil.multiply(5, 6)}`;
    }
  },

  // Bai 19: Polymorphism
  {
    id: 19,
    title: "Bai 19: Method overriding & Polymorphism",
    description: "Demonstrate method overriding using polymorphism with Animal and subclasses.",
    code: `class Animal { makeSound() { return "Tieng keu loai vat"; } }
class Cow extends Animal { makeSound() { return "Moo moo"; } }
class Duck extends Animal { makeSound() { return "Quack quack"; } }
const list: Animal[] = [new Cow(), new Duck()];`,
    run: () => {
      class Animal { makeSound() { return "Chung"; } }
      class Cow extends Animal { makeSound() { return "Moo moo"; } }
      class Duck extends Animal { makeSound() { return "Quack quack"; } }
      const list: Animal[] = [new Cow(), new Duck()];
      return list.map(a => a.makeSound()).join(", ");
    }
  },

  // Bai 20: Vehicle interface
  {
    id: 20,
    title: "Bai 20: Vehicle interface (Car & Bike)",
    description: "Write a Vehicle interface and implement it in Car and Bike classes.",
    code: `interface Vehicle { speed: number; drive(): string; }
class Car implements Vehicle {
  constructor(public speed: number) {}
  drive() { return \`O to chay toc do \${this.speed} km/h\`; }
}
class Bike implements Vehicle {
  constructor(public speed: number) {}
  drive() { return \`Xe dap chay toc do \${this.speed} km/h\`; }
}`,
    run: () => {
      interface Vehicle { speed: number; drive(): string; }
      class Car implements Vehicle {
        constructor(public speed: number) {}
        drive() { return `O to chay voi toc do ${this.speed} km/h`; }
      }
      class Bike implements Vehicle {
        constructor(public speed: number) {}
        drive() { return `Xe dap chay voi toc do ${this.speed} km/h`; }
      }
      return `${new Car(80).drive()} | ${new Bike(15).drive()}`;
    }
  },

  // Bai 21: Generic Repository
  {
    id: 21,
    title: "Bai 21: Generic Repository<T>",
    description: "Create a generic Repository class with methods add(), getAll().",
    code: `class Repository<T> {
  private items: T[] = [];
  add(item: T): void { this.items.push(item); }
  getAll(): T[] { return this.items; }
}`,
    run: () => {
      class Repository<T> {
        private items: T[] = [];
        add(item: T): void { this.items.push(item); }
        getAll(): T[] { return this.items; }
      }
      const repo = new Repository<string>();
      repo.add("Item 1");
      repo.add("Item 2");
      return `Danh sach trong Repo: ${repo.getAll().join(", ")}`;
    }
  },

  // Bai 22: Stack
  {
    id: 22,
    title: "Bai 22: Stack (push, pop, peek, isEmpty)",
    description: "Create a class Stack with push, pop, peek, isEmpty methods.",
    code: `class Stack<T> {
  private data: T[] = [];
  push(item: T) { this.data.push(item); }
  pop(): T | undefined { return this.data.pop(); }
  peek(): T | undefined { return this.data[this.data.length - 1]; }
  isEmpty(): boolean { return this.data.length === 0; }
}`,
    run: () => {
      class Stack<T> {
        private data: T[] = [];
        push(item: T) { this.data.push(item); }
        pop(): T | undefined { return this.data.pop(); }
        peek(): T | undefined { return this.data[this.data.length - 1]; }
        isEmpty(): boolean { return this.data.length === 0; }
      }
      const s = new Stack<number>();
      s.push(10);
      s.push(20);
      s.push(30);
      const popped = s.pop();
      return `Vua pop ra: ${popped}, Phan tu tren cung (peek): ${s.peek()}`;
    }
  },

  // Bai 23: Payment interface
  {
    id: 23,
    title: "Bai 23: Payment interface (Cash & Card)",
    description: "Create an interface Payment with method pay(amount). Implement CashPayment and CardPayment.",
    code: `interface Payment { pay(amount: number): string; }
class CashPayment implements Payment {
  pay(a: number) { return \`Thanh toan tien mat: \${a} VND\`; }
}
class CardPayment implements Payment {
  pay(a: number) { return \`Thanh toan qua the: \${a} VND\`; }
}`,
    run: () => {
      interface Payment { pay(amount: number): string; }
      class CashPayment implements Payment {
        pay(a: number) { return `Thanh toan tien mat: ${a} VND`; }
      }
      class CardPayment implements Payment {
        pay(a: number) { return `Thanh toan the tin dung: ${a} VND`; }
      }
      return `${new CashPayment().pay(50000)} | ${new CardPayment().pay(200000)}`;
    }
  },

  // Bai 24: Abstract Appliance
  {
    id: 24,
    title: "Bai 24: Abstract Appliance (Fan & AC)",
    description: "Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.",
    code: `abstract class Appliance { abstract turnOn(): string; }
class Fan extends Appliance { turnOn() { return "Quat dang quay"; } }
class AirConditioner extends Appliance { turnOn() { return "Dieu hoa dang bat lam mat"; } }`,
    run: () => {
      abstract class Appliance { abstract turnOn(): string; }
      class Fan extends Appliance { turnOn() { return "Quat da bat"; } }
      class AirConditioner extends Appliance { turnOn() { return "Dieu hoa da bat (24 do)"; } }
      return `${new Fan().turnOn()} | ${new AirConditioner().turnOn()}`;
    }
  },

  // Bai 25: Shape static method
  {
    id: 25,
    title: "Bai 25: Shape with static method describe()",
    description: "Create a class Shape with a static method describe().",
    code: `class Shape {
  static describe(): string {
    return "Shape la lop co so bieu dien cac hinh hoc trong toan hoc";
  }
}`,
    run: () => {
      class Shape {
        static describe(): string {
          return "Shape la lop co so bieu dien cac hinh hoc trong toan hoc";
        }
      }
      return Shape.describe();
    }
  },

  // Bai 26: Order total price
  {
    id: 26,
    title: "Bai 26: Order calculate total price",
    description: "Create a class Order with list of products. Add method to calculate total price.",
    code: `class Product { constructor(public name: string, public price: number) {} }
class Order {
  constructor(public products: Product[] = []) {}
  getTotal(): number { return this.products.reduce((s, p) => s + p.price, 0); }
}`,
    run: () => {
      class Product { constructor(public name: string, public price: number) {} }
      class Order {
        constructor(public products: Product[] = []) {}
        getTotal(): number { return this.products.reduce((s, p) => s + p.price, 0); }
      }
      const order = new Order([
        new Product("Ao thun", 150),
        new Product("Quan jean", 300),
        new Product("Giay", 500)
      ]);
      return `Tong gia tri don hang: ${order.getTotal()}k VND`;
    }
  },

  // Bai 27: Teacher extends Person
  {
    id: 27,
    title: "Bai 27: Class Teacher extends Person",
    description: "Create a class Teacher that extends Person. Add subject attribute and introduce method.",
    code: `class Person { constructor(public name: string, public age: number) {} }
class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) { super(name, age); }
  introduce() { return \`Toi la giao vien \${this.name}, giang day mon \${this.subject}\`; }
}`,
    run: () => {
      class Person { constructor(public name: string, public age: number) {} }
      class Teacher extends Person {
        constructor(name: string, age: number, public subject: string) { super(name, age); }
        introduce() { return `Toi la giao vien ${this.name}, giang day mon ${this.subject}`; }
      }
      const t = new Teacher("Thay Nguyen", 40, "Lap trinh Web");
      return t.introduce();
    }
  },

  // Bai 28: Protected method makeSound
  {
    id: 28,
    title: "Bai 28: Class Animal with protected method",
    description: "Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.",
    code: `class Animal {
  protected makeSound(): string { return "Am thanh chung"; }
}
class Dog extends Animal {
  public bark() { return \`Cho sua: \${this.makeSound()} -> Gau gau\`; }
  protected makeSound(): string { return "Gau"; }
}`,
    run: () => {
      class Animal {
        protected makeSound(): string { return "Am thanh chung"; }
      }
      class Dog extends Animal {
        public bark() { return `Cho phat ra am thanh: ${this.makeSound()}`; }
        protected makeSound(): string { return "Gau Gau!"; }
      }
      return new Dog().bark();
    }
  },

  // Bai 29: Movable interface
  {
    id: 29,
    title: "Bai 29: Interface Movable (Car & Robot)",
    description: "Create an interface Movable with method move(). Implement it in Car and Robot.",
    code: `interface Movable { move(): string; }
class Car implements Movable { move() { return "Xe o to dang lan banh tren duong"; } }
class Robot implements Movable { move() { return "Robot dang buoc di bang 2 chan"; } }`,
    run: () => {
      interface Movable { move(): string; }
      class Car implements Movable { move() { return "Xe o to dang chay bang 4 banh"; } }
      class Robot implements Movable { move() { return "Robot dang di chuyen bang 2 chan"; } }
      return `${new Car().move()} | ${new Robot().move()}`;
    }
  },

  // Bai 30: Class School
  {
    id: 30,
    title: "Bai 30: Class School with Students & Teachers",
    description: "Create a class School with list of Students and Teachers. Add method to display info.",
    code: `class School {
  constructor(
    public name: string,
    public teachers: string[] = [],
    public students: string[] = []
  ) {}
  display(): string {
    return \`Truong \${this.name} co \${this.teachers.length} giao vien va \${this.students.length} hoc sinh.\`;
  }
}`,
    run: () => {
      class School {
        constructor(
          public name: string,
          public teachers: string[] = [],
          public students: string[] = []
        ) {}
        display(): string {
          return `Truong: ${this.name} | Giao vien: ${this.teachers.join(", ")} | So luong sinh vien: ${this.students.length}`;
        }
      }
      const school = new School("Dai hoc Cong nghiep TP.HCM", ["Thay A", "Co B"], ["Tai", "Nam", "Lan"]);
      return school.display();
    }
  }
];