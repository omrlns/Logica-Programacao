import { escrever } from "../Capítulo 02/utilitarios.js"

let anoDeCopa = 1930; // primeira edição da copa
let edicao = 0;

while (edicao <= 25) { // 25 edições marcam o centenário da copa, já que 25 edições x 4 anos = 100 anos 
    escrever(`Em ${anoDeCopa} vai ter copa!`);
    anoDeCopa += 4;
    edicao += 1;
}

escrever(`Esses são os anos de copa que marcarão o centenário da competição!`)