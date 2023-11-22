// controller.ts
import * as readlineSync from 'readline-sync';
import { EditorDeTexto } from '../Model/text-editor';

export class ControladorDoEditorDeTexto {
  private editorDeTexto: EditorDeTexto;

  constructor(editorDeTexto: EditorDeTexto) {
    this.editorDeTexto = editorDeTexto;
  }

  iniciar(): void {
    console.log('Editor de Texto - Digite suas linhas (Digite "EOF" para encerrar):');

    let numeroLinha = 1;
    while (true) {
      const entradaUsuario = readlineSync.question(`Linha ${numeroLinha}: `);

      if (entradaUsuario.toLowerCase() === 'eof') {
        break;
      }

      this.editorDeTexto.inserirLinha(numeroLinha, entradaUsuario);
      numeroLinha++;
    }

    this.editorDeTexto.notificar();
  }
}
