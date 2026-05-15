import { escrever } from "../Utilitários/escrever.js";

// let anoDeCopa = 1930; // primeira edição da copa

let anoInicial = parseInt(prompt("Informe o ANO INICIAL para podermos calcular: "))
let anoLimite = parseInt(prompt("Até que anos devemos mostrar as edições da copa?"))
let edicao = 0;

while (anoInicial <= anoLimite) {
    escrever(`Em ${anoInicial} vai ter copa, e essa será a ${edicao + 1}ª edição.`);
    anoInicial += 4;
    edicao += 1;
}