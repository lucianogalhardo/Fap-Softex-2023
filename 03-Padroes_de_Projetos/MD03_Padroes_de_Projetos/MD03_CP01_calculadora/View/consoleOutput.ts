const prompt = require ('prompt-sync')();

// View
export class ConsoleOutput {
    static displayResult(result: number): void {
      console.log(`O resultado da operação é: ${result}`);
    }
  }
  