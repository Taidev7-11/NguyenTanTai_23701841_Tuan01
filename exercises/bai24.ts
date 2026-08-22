import { Exercise } from "@/types/exercise";

// Abstract class Appliance
export abstract class Appliance {
  abstract turnOn(): string;
}

export class Fan extends Appliance {
  turnOn(): string {
    return "Quat dang quay tao gio";
  }
}

export class AirConditioner extends Appliance {
  turnOn(): string {
    return "Dieu hoa dang bat (nhiet do 24 do C)";
  }
}

export const bai24: Exercise = {
  id: 24,
  title: "Bai 24: Abstract Appliance (Fan & AC)",
  description: "Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.",
  code: `export abstract class Appliance { abstract turnOn(): string; }

export class Fan extends Appliance {
  turnOn(): string { return "Quat dang bat"; }
}

export class AirConditioner extends Appliance {
  turnOn(): string { return "Dieu hoa dang bat"; }
}`,
  run: () => {
    return `${new Fan().turnOn()} | ${new AirConditioner().turnOn()}`;
  }
};