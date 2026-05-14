let anoDeCopa = 1930; // primeira edição da copa
let edicao = 0;

while (edicao <= 25) { // 25 edições marcam o centenário da copa, já que 25 edições x 4 anos = 100 anos 
    console.log(`Em ${anoDeCopa} vai ter copa!`);
    anoDeCopa += 4;
    edicao += 1;
}