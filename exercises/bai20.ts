import { Exercise } from "@/types/exercise";

// Vehicle interface va cac lop implement
export interface Vehicle {
  speed: number;
  drive(): string;
}

export class CarVehicle implements Vehicle {
  constructor(public speed: number) {}

  drive(): string {
    return `O to dang chay voi toc do ${this.speed} km/h`;
  }
}

export class Bike implements Vehicle {
  constructor(public speed: number) {}

  drive(): string {
    return `Xe dap dang di chuyen voi toc do ${this.speed} km/h`;
  }
}

export const bai20: Exercise = {
  id: 20,
  title: "Bai 20: Vehicle interface (Car & Bike)",
  description: "Write a Vehicle interface and implement it in Car and Bike classes.",
  code: `export interface Vehicle { speed: number; drive(): string; }

export class CarVehicle implements Vehicle {
  constructor(public speed: number) {}
  drive(): string { return \`O to chay \${this.speed} km/h\`; }
}

export class Bike implements Vehicle {
  constructor(public speed: number) {}
  drive(): string { return \`Xe dap chay \${this.speed} km/h\`; }
}`,
  run: () => {
    return `${new CarVehicle(80).drive()} | ${new Bike(15).drive()}`;
  }
};