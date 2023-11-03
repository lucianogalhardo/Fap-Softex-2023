import { iProduto } from "./iProduto";

export class Computador implements iProduto {
    private ram: number;
    private ssd: number;
    private cpu: number;
    private Tipo: string = "Computador";
    
    constructor(ram: number, ssd: number, cpu: number) {
        this.ram = ram;
        this.ssd = ssd;
        this.cpu = cpu;
        
    }

    getRAM(): number {
        return this.ram;
    }

    getSSD(): number {
        return this.ssd;
    }

    getCPU(): number {
        return this.cpu;
    }

    getTipo(): string {
        return this.Tipo;
      }
    
    toString(): string {
        return `Computador: RAM=${this.ram}GB, |  SSD=${this.ssd}GB, |  CPU=${this.cpu}GHz`;
      }

}