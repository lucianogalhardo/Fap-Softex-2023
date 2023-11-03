import { iProduto } from "./iProduto";

export class Servidor implements iProduto {
    private ram: number;
    private ssd: number;
    private cpu: number;
    private Tipo: string = "Servidor";

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

    getCPU() : number {
        return this.cpu;
    }

    getTipo() : string {
        return this.Tipo;
    }

    toString() : string {
        return `Servidor: Ram: ${this.ram} Gb  |  Ssd: ${this.ssd} Gb  |  Cpu: ${this.cpu} Ghz  |  Tipo: ${this.Tipo}`;
    }

}