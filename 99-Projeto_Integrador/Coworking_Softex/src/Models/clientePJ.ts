import { Cliente } from "./cliente";
import { Contrato } from "./contrato";
import { Email } from "./email";
import { Endereco } from "./endereco";
import { Telefone } from "./telefone";


export class ClientePF extends Cliente {

    // Campos/ Atributos

    private cnpj: string;
    private razaoSocial: string;
    private nomeFantasia: string;

    // Construtor
    constructor (
        idCliente: number, 
        _email: Array<Email>,
        _telefones: Array<Telefone>, 
        endereco: Endereco, 
        contrato: Contrato,
        cnpj: string,
        razaoSocial: string,
        nomeFantasia: string,
        ) {

        super(idCliente, endereco, contrato);
        this.cnpj = cnpj;
        this.razaoSocial =razaoSocial;
        this.nomeFantasia = nomeFantasia;
            

        }

        // Getters

        getCnpj(): string {
            return this.cnpj;
        }

        getRazaoSocial(): string {
            return this.razaoSocial;
        }

        getNomeFantasia(): string {
            return this.nomeFantasia;
        }

        setRazaoSocial(razaoSocial: string): void {
            this.razaoSocial = razaoSocial;
        }

        setNomeFantasia(nomeFantasia: string): void {
            this.nomeFantasia = nomeFantasia;
        }


        
}