// app.ts
import { EditorDeTexto } from './Model/text-editor';
import { ControladorDoEditorDeTexto } from './Controller/controller';
import { VisualizadorDeTexto } from './View/view';

const editorDeTexto = new EditorDeTexto();
const controladorDoEditorDeTexto = new ControladorDoEditorDeTexto(editorDeTexto);
const visualizadorDeTexto = new VisualizadorDeTexto(editorDeTexto);

controladorDoEditorDeTexto.iniciar();
