export function calcularIMC(peso, altura) {
    const imc = (peso / (altura * altura)).toFixed(0);
    return imc;
}