import { EventEmitter } from 'events';

export class SistemaSeguranca extends EventEmitter {
  private static instancia: SistemaSeguranca;
  private senhaBaseSecreta: string = 'senhaUltraSecreta123';

  private constructor() {
    super();
  }

  public static obterInstancia(): SistemaSeguranca {
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  public acessarBaseSecreta(senhaInserida: string): void {
    if (senhaInserida === this.senhaBaseSecreta) {
      console.log('Acesso concedido à Base Secreta!');
      this.emit('acessoConcedido');
    } else {
      console.log('Acesso negado à Base Secreta. Senha incorreta.');
      this.emit('acessoNegado');
    }
  }
}
