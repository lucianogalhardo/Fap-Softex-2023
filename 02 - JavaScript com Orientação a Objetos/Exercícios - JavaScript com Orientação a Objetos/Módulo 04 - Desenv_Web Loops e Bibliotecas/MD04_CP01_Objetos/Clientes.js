export class Clientes{
    
    constructor(idClientes, nomeClientes, telefoneClientes){
        this.idClientes = idClientes;
        this.nomeClientes = nomeClientes;
        this.telefoneClientes = telefoneClientes;

    } 

    addClientes(Clientes){
        this.idClientes.push(Clientes.length + 1);
        this.nomeClientes.push(prompt('Insira o nome do Cliente: '));
        this.telefoneClientes.push(prompt('Insira o telefone do Cliente: '));

    }

}

var cadClientes = new Clientes();