// view.ts
import { Observador } from '../Model/observer';
import { EditorDeTexto } from '../Model/text-editor';

export class VisualizadorDeTexto implements Observador {
  private editorDeTexto: EditorDeTexto;

  constructor(editorDeTexto: EditorDeTexto) {
    this.editorDeTexto = editorDeTexto;
    //this.editorDeTexto.adicionarObservador(this);
  }

  atualizar(): void {
    this.exibirConteudo();
  }

  private exibirConteudo(): void {
    console.log('Conteúdo do Arquivo:');
    const linhas = this.editorDeTexto.obterLinhas();
    linhas.forEach((linha, indice) => console.log(`${indice + 1}: ${linha}`));
  }
}
