// editor.ts
import { Observador } from './observer';

export class Editor implements Observador {
  atualizar(): void {
      throw new Error('Method not implemented.');
  }
  notificar(): void {
    // Lógica para notificar observadores
  }
}
