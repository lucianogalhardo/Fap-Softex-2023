// cria a class depositos
export class depositos{

    constructor(dataDeposito, valorDeposito){
        this.dataDeposito = Date.now;
        this.valorDeposito = 0.00;
    }
}

// cria a class saques
export class saques{

    constructor(dataSaque, valorSaque){
        this.dataSaque = Date.now;
        this.valorSaque = 0.00;
    }
}
