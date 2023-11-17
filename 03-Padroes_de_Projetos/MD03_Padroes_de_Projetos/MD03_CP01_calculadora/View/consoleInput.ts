const prompt = require('prompt-sync')();


// View
export class ConsoleInput {
    static getUserInput(promptMessage: string): number {
      return parseInt(prompt(promptMessage));
    }
  }
  

