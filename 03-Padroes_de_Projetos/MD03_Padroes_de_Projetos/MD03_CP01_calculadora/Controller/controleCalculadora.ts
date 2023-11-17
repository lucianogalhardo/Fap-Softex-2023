// Controller

const prompt = require('prompt-sync')();

import { AdicStrategy } from '../Model/metodoAdicao';
import { MultiStrategy } from '../Model/metodoMultiplicacao';
import { SubStrategy } from '../Model/metodoSubtracao';
import { Calculator } from '../Model/metodoCalcular';
import { ConsoleInput } from '../View/consoleInput';
import { ConsoleOutput } from '../View/consoleOutput';


export class CalculatorController {
  private calculator: Calculator;

  constructor(calculator: Calculator) {
    this.calculator = calculator;
  }

  performCalculation(): void {
    const num1 = ConsoleInput.getUserInput('Digite o primeiro número:');
    const num2 = ConsoleInput.getUserInput('Digite o segundo número:');
    const operation = prompt('Digite a operação (+ para adição, - para subtração, * para multiplicação):');

    switch (operation) {
      case '+':
        this.calculator.setStrategy(new AdicStrategy());
        break;
      case '-':
        this.calculator.setStrategy(new SubStrategy());
        break;
      case '*':
        this.calculator.setStrategy(new MultiStrategy());
        break;
      default:
        throw new Error('Operação inválida.');
    }

    const result = this.calculator.calculate(num1, num2);
    ConsoleOutput.displayResult(result);
  }
}
