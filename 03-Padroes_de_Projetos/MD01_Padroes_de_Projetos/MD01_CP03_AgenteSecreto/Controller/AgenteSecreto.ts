import { SistemaSeguranca } from '../Model/SistemaSeguranca';

export class AgenteSecreto {
  public tentarAcessarBaseSecreta(senha: string): void {
    const sistemaSeguranca = SistemaSeguranca.obterInstancia();

    sistemaSeguranca.on('acessoConcedido', () => {
      console.log('O Agente Secreto está dentro da Base Secreta!');
    });

    sistemaSeguranca.on('acessoNegado', () => {
      console.log('O Agente Secreto foi detectado! Acesso negado!');
    });

    sistemaSeguranca.acessarBaseSecreta(senha);
  }
}
