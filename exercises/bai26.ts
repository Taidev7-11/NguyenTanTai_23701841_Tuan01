import { Exercise } from "@/types/exercise";
import { Product } from "./bai8";

// Class Order chua danh sach Product va tinh tong tien
export class Order {
  constructor(public products: Product[] = []) {}

  getTotal(): number {
    return this.products.reduce((sum, item) => sum + item.price, 0);
  }
}

export const bai26: Exercise = {
  id: 26,
  title: "Bai 26: Order calculate total price",
  description: "Create a class Order with list of products. Add method to calculate total price.",
  code: `export class Order {
  constructor(public products: Product[] = []) {}
  getTotal(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}

const order = new Order([new Product("Ao", 150), new Product("Quan", 300)]);
console.log(order.getTotal());`,
  run: () => {
    const order = new Order([
      new Product("Ao so mi", 200),
      new Product("Quan tay", 350),
      new Product("Giay da", 800)
    ]);
    return `Tong gia tri don hang: $${order.getTotal()}`;
  }
};