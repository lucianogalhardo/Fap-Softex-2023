import { OperStrategy } from "./interfaceStrategy";

export class SubStrategy implements OperStrategy {
    execute(num1: number, num2: number): number {
      return num1 - num2;
    }
  }
  