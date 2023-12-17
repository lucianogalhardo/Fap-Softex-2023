export class Contrato {

    private idContrato: number;
    private contrato: number;

    constructor(idContrato: number, contrato: number) {
        this.idContrato = idContrato;
        this.contrato = contrato;

    }

    getIdContrato(): number {
        return this.idContrato;
    }

    getContrato(): number {
        return this.contrato;
    }

    setIdContrato(idContrato: number): void { 
        this.idContrato = idContrato;
    }

    setContrato(contrato: number): void {
        this.contrato= contrato;
    }



}