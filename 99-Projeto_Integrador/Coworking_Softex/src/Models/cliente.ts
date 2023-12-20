import { Contrato } from "./contrato";  // precisa criar a classe contrato
import { Email } from "./email";
import { Endereco } from "./endereco"; // precisa criar a classe endereco
import { Telefone } from "./telefone";
import { StatusCliente } from "./statusCliente";


export class Cliente {

// Campos / Atributos
private idCliente: number;
private email: Array<Email>;
private telefones: Array<Telefone>;
private endereco: Endereco;  // erro será corrigido quando criar a classe endereco
private contrato: Contrato;  // erro será corrigido quando criar a classe Contrato
private status: StatusCliente;
private dataCadastro: Date;
private dataAlteracao: Date;

// Construtor
constructor(
    idCliente: number, 
    endereco: Endereco, 
    contrato: Contrato,
    status: StatusCliente,
    dataCadastro: Date,
    dataAlteracao: Date,



    ) {

    this.idCliente= idCliente;
    this.email= new Array<Email>;
    this.telefones= new Array<Telefone>;
    this.endereco= endereco;
    this.contrato= contrato;
    this.status= status;
    this.dataCadastro= dataCadastro;
    this.dataAlteracao= dataAlteracao;
    
    }

    // Getters
    getIdCliente(): number { 
        return this.idCliente;
    }

    getEmail(): Array<Email> { 
        return this.email;
    }

    getTelefones(): Array<Telefone> { 
        return this.telefones;
    }

    getEndereco(): Endereco {
        return this.endereco;
    }
    getContrato(): Contrato { 
        return this.contrato;
    }

    getStatus(): StatusCliente {
        return  this.status;
    }

    getDataCadastro(): Date {
        return this.dataCadastro;
    }

    getDataAlteracao(): Date{
        return this.dataAlteracao;
    }

    // Setters

    setidCliente(idClient: number): void {
        this.idCliente = idClient;
    }

    setEndereco(endereco: Endereco): void {
        this.endereco = endereco;
    }

    setContrato(contrato: Contrato): void {
        this.contrato = contrato;
    }

    setStatus(status: StatusCliente): void {
        this.status = status;
    }

    setDataCadastro(dataCadastro: Date): void {
        this.dataCadastro= dataCadastro;
    }

    setDataAlteracao(dataAlteracao: Date): void{
        this.dataAlteracao= dataAlteracao;
    }

    // Metodos
    public addEmail(emailCliente: Email): void{
        this.email.push(emailCliente);
    }

    public removeEmail(emailCliente: Email): void{
        this.email.splice(this.email.indexOf(emailCliente), 1);
    }

    public addTelefone(telefoneCliente: Telefone): void{
        this.telefones.push(telefoneCliente);
    }

    public removeTelefone(telefoneCliente: Telefone): void{
        this.telefones.splice(this.telefones.indexOf(telefoneCliente),1);
    }

}