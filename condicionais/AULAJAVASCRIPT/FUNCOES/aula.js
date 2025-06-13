function qualSeuNome(nome) {
    return nome
}
const valorNome = qualSeuNome("Felipi delfino");
console.log("Meu nome é :", valorNome);


function qualSuaIdade(idade) {
    return idade
}
const valorIdade = qualSuaIdade(35);
console.log("Sua idade e :", valorIdade);


function quadrado(valor) {
    return valor * valor;
}
const valorDoQuadrado = quadrado(15);
console.log("o valor e :", valorDoQuadrado);


function encrementarJuros(valor, porcentualJuros) {
    const valorAcrecimo = (porcentualJuros / 100) * valor;
    return valor + valorAcrecimo
}

console.log("incrementação de juros", encrementarJuros(100, 10));
console.log("incrementação de juros", encrementarJuros(100, 20));
console.log("incrementação de juros", encrementarJuros(100, 80));








