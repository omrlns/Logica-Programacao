import { escrever } from "../Utilitários/escrever.js";

let anoOlimpico = 1896;

let anoLimite = parseInt(prompt("Até que anos devemos mostrar as edições da olímpiadas?"));
let edicao = 0;

while (anoOlimpico <= anoLimite) {
    escrever(`Em ${anoOlimpico} vai ter olímpiadas, e essa será a ${edicao + 1}ª edição.`);
    anoOlimpico += 4;
    edicao += 1;
}