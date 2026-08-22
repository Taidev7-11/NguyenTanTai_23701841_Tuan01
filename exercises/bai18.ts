import { Exercise } from "@/types/exercise";

// lop static MathUtil
export class MathUtil {
  static add(a: number, b: number): number { return a + b; }
  static subtract(a: number, b: number): number { return a - b; }
  static multiply(a: number, b: number): number { return a * b; }
  static divide(a: number, b: number): number | string {
    return b !== 0 ? a / b : "Khong the chia cho 0";
  }
}

export const bai18: Exercise = {
  id: 18,
  title: "Bai 18: Static class MathUtil",
  description: "Create a static class MathUtil with methods add(), subtract(), multiply(), divide().",
  code: `export class MathUtil {
  static add(a: number, b: number) { return a + b; }
  static subtract(a: number, b: number) { return a - b; }
  static multiply(a: number, b: number) { return a * b; }
  static divide(a: number, b: number) { return b !== 0 ? a / b : "Error"; }
}`,
  run: () => {
    return `Add: 10 + 5 = ${MathUtil.add(10, 5)} | Multiply: 10 * 5 = ${MathUtil.multiply(10, 5)} | Divide: 10 / 2 = ${MathUtil.divide(10, 2)}`;
  }
};