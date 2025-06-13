const precoEtanol = 4.50;
const precoGasolina = 5.70;
const litrosPorKM = 10;

const tipoDeCombustivel = "ETANOL";
const distanciakm = 1000;

const ltConsumido = distanciakm / litrosPorKM;
const valorAGastar = ltConsumido * precoEtanol;

if (tipoDeCombustivel == "ETANOL") {
    console.log("R$", valorAGastar.toFixed(2));

}