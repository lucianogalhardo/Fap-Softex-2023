import { OperStrategy } from "./interfaceStrategy";

export class Calculator {
    private strategy: OperStrategy | undefined;

    setStrategy(strategy: OperStrategy) {
      this.strategy = strategy;
    }
  
    calculate(num1: number, num2: number): number {
      if (!this.strategy) {
        throw new Error('A estratégia não foi definida.');
      }
      return this.strategy.execute(num1, num2);
    }
  }
