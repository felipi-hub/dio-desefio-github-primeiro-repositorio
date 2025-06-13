class carros {
    marca;
    cor;
    valorPorKm;

    constructor(marca, cor, valorPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.valorPorKm = valorPorKm;

    }

    descricaoVeiculo(distancia, custoDoCombustivel) {

        return this.marca, this.cor, distancia * this.valorPorKm * custoDoCombustivel;

    }

};

const carro01 = new carros("HRV", "branco", 1 / 10);
console.log(carro01.descricaoVeiculo(1000, 4.50));

const carro02 = new carros("BYD", "PRET0", 1 / 8);
console.log(carro02.descricaoVeiculo(80, 5.50));

/*const distancia = 1000;
const custoDoCombustivel = 4.50;
const litrosGastoPorKm = 10;

const litrosConsumidos = (distancia / 1000) * litrosGastoPorKm;
const valorPorKm = litrosConsumidos * custoDoCombustivel;

const carro1 = new carros("hrv", "branco", valorPorKm.toFixed(2));
const carro2 = new carros("byd", "preto", valorPorKm.toFixed(2));*/














