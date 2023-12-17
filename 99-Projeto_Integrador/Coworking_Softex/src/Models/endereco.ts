export class Endereco {

    private idEndereco: number;
    private endereco: String;

    constructor(idEndereco: number, endereco: String){
        this.idEndereco = idEndereco;
        this.endereco = endereco;
    }

    getIdEndereco(): number {
        return this.idEndereco;
    }

    getEndereco(): String {
        return this.endereco;
    }

    setIdEndereco(idEndereco: number): void { 
        this.idEndereco = idEndereco;
    }

    setEndereco(endereco: String): void {
        this.endereco = endereco;
    }
}