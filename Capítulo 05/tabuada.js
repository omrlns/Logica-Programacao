import { escrever } from "../Utilitários/escrever.js";

let tabuada = parseInt(prompt("Você deseja saber a TABUADA de qual número?"));
let multiplicador = 0;

escrever(`---------- TABUADA DO ${tabuada} ----------`);
while (multiplicador <= 10) {
    escrever(`${tabuada} x ${multiplicador} = ${tabuada * multiplicador}`);
    multiplicador += 1;
}