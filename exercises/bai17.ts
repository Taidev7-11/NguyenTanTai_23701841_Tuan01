import { Exercise } from "@/types/exercise";

// Singleton Pattern cho class Logger
export class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): string {
    return `[SYSTEM LOG]: ${message}`;
  }
}

export const bai17: Exercise = {
  id: 17,
  title: "Bai 17: Singleton Logger",
  description: "Write a singleton Logger class that logs messages to console.",
  code: `export class Logger {
  private static instance: Logger;
  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) Logger.instance = new Logger();
    return Logger.instance;
  }

  log(msg: string): string { return \`[SYSTEM LOG]: \${msg}\`; }
}`,
  run: () => {
    const l1 = Logger.getInstance();
    const l2 = Logger.getInstance();
    return `${l1.log("Ket noi DB thanh cong")} (La mot the hien duy nhat: ${l1 === l2})`;
  }
};