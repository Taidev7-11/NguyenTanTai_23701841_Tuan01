import { Exercise } from "@/types/exercise";

// lop Product va bo loc san pham theo gia
export class Product {
  constructor(public name: string, public price: number) {}
}

export const bai08: Exercise = {
  id: 8,
  title: "Bai 8: Filter Products with price > 100",
  description: "Create a Product class with name, price. Create an array of products and filter products with price > 100.",
  code: `export class Product {
  constructor(public name: string, public price: number) {}
}

const list = [
  new Product("Chuot", 50),
  new Product("Ban phim", 150),
  new Product("Man hinh", 300)
];

const filtered = list.filter((p) => p.price > 100);
console.log(filtered);`,
  run: () => {
    const list = [
      new Product("Chuot", 50),
      new Product("Ban phim", 150),
      new Product("Man hinh", 300)
    ];
    const filtered = list.filter((p) => p.price > 100);
    return "San pham gia > 100: " + filtered.map((p) => `${p.name} ($${p.price})`).join(", ");
  }
};