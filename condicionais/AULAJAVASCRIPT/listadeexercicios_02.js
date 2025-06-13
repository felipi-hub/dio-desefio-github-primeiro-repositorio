
class pessoas {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }

    calcularImc() {
        const imc = this.peso / Math.pow(this.altura, 2);
        console.log(`meu nome e ${this.nome} e meu imc e ${imc.toFixed(2)} `);
        return imc;

    }
    classificarImc() {
        const resultadoImc = this.calcularImc();
        if (resultadoImc < 18.5) {
            console.log(`IMC: ${resultadoImc.toFixed(2)}. Você está abaixo do peso.`);
        } else if (resultadoImc < 25) {
            console.log(`IMC: ${resultadoImc.toFixed(2)}. Você está no peso ideal.`);
        } else if (resultadoImc < 30) {
            console.log(`IMC: ${resultadoImc.toFixed(2)}. Você está com sobrepeso.`);
        } else if (resultadoImc < 35) {
            console.log(`IMC: ${resultadoImc.toFixed(2)}. Você está com obesidade grau I.`);
        } else if (resultadoImc < 40) {
            console.log(`IMC: ${resultadoImc.toFixed(2)}. Você está com obesidade grau II.`);
        } else {
            return (`IMC: ${resultadoImc.toFixed(2)}. Você está com obesidade grau III.`);
        };
    }
}
const nome1 = new pessoas("Felipi", 90, 1.80);
const nome2 = new pessoas("Bryan", 20, 1.20);

nome1.classificarImc();
nome2.classificarImc();








/*function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}
function classificarImc(imc) {
    if (imc < 18.5) {
        return (`IMC: ${imc.toFixed(1)}. Você está abaixo do peso.`);
    } else if (imc < 25) {
        return (`IMC: ${imc.toFixed(1)}. Você está no peso ideal.`);
    } else if (imc < 30) {
        return (`IMC: ${imc.toFixed(1)}. Você está com sobrepeso.`);
    } else if (imc < 35) {
        return (`IMC: ${imc.toFixed(1)}. Você está com obesidade grau I.`);
    } else if (imc < 40) {
        return (`IMC: ${imc.toFixed(1)}. Você está com obesidade grau II.`);
    } else {
        return (`IMC: ${imc.toFixed(1)}. Você está com obesidade grau III.`);
    };

}
function main() {
    const peso = 50;
    const altura = 1.80;
    const imc = calcularImc(peso, altura)
    console.log(classificarImc(imc));

}
main()*/







