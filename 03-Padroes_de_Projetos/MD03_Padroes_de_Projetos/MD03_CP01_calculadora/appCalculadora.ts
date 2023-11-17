// App Calculadora
const prompt = require('prompt-sync')();


// Uso da calculadora
import { Calculator } from './Model/metodoCalcular';
import { CalculatorController } from './Controller/controleCalculadora';

const calculator = new Calculator();
const calculatorController = new CalculatorController(calculator);
calculatorController.performCalculation();
