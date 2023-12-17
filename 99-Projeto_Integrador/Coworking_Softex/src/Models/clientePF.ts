import { Cliente } from "./cliente";
import { Contrato } from "./contrato";
import { Email } from "./email";
import { Endereco } from "./endereco";
import { Telefone } from "./telefone";


export class ClientePF extends Cliente {

    // Campos/ Atributos

    private cpf: string;
    private nome: string;

    // Construtor
    constructor (
        idCliente: number, 
        _email: Array<Email>,
        _telefones: Array<Telefone>, 
        endereco: Endereco, 
        contrato: Contrato,
        cpf: string,
        nome: string
        
        ) {

        super(idCliente, endereco, contrato);
        this.cpf = cpf;
        this.nome = nome;
            

        }

        // Getters

        getCpf(): string {
            return this.cpf;
        }

        getNome(): string {
            return this.nome;
        }

        setNome(nome: string): void {
            this.nome = nome;
        }


        
}