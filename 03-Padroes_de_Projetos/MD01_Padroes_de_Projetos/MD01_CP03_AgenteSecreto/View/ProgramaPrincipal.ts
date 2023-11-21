import { AgenteSecreto } from '../Controller/AgenteSecreto';

export const programaPrincipal = () => {
  const agenteController = new AgenteSecreto();

  // Agente tenta acessar a Base Secreta com senha correta
  agenteController.tentarAcessarBaseSecreta('senhaUltraSecreta123');

  // Agente tenta acessar a Base Secreta com senha incorreta
  agenteController.tentarAcessarBaseSecreta('senhaIncorreta456');
};


