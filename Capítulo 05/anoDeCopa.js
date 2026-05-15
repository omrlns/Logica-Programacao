import { escrever } from "../Capítulo 02/utilitarios.js"

let anoDeCopa = 1930; // primeira edição da copa
let edicao = 0;

let anoLimite = parseInt((prompt("Até que anos devemos mostrar as edições da copa?")))

while (anoDeCopa <= anoLimite) {
    escrever(`Em ${anoDeCopa} vai ter copa, e essa será a ${edicao + 1}ª edição.`);
    anoDeCopa += 4;
    edicao += 1;
}