// text-editor.ts
import { VisualizadorDeTexto } from '../View/view';
import { Editor } from './editor';

export class EditorDeTexto extends Editor {
  private linhas: string[] = [];
    

  inserirLinha(numeroLinha: number, texto: string): void {
    this.linhas.splice(numeroLinha - 1, 0, texto);
    this.notificar();
  }

  removerLinha(numeroLinha: number): void {
    this.linhas.splice(numeroLinha - 1, 1);
    this.notificar();
  }

  obterLinhas(): string[] {
    return [...this.linhas];
  }
}
