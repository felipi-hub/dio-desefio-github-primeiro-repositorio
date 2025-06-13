const precoCombustivel = 5.75;
const kmPorLitro = 10;
const distanciaEmKm = 100;


const litrosConsumido = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumido * precoCombustivel;

console.log(valorGasto.toFixed(2));