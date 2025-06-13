const nomeVisitante = "Felipi delfino";

function escreverNome(nome) {
    return nome
}
const meuNome = escreverNome(nomeVisitante);


const idade = 18
const idadePermitida = 18

function minhaIdade(idade) {
    return idade
}
const definirIdade = minhaIdade(idade);



function verificarIdade(definirIdade) {
    if (definirIdade < idadePermitida) {
        console.log("OLA ", meuNome, "Voce e menor de idade entrada proibida :", definirIdade, "anos");
    } else if (definirIdade == idadePermitida) {
        console.log(meuNome, "Voce tem", definirIdade, "anos entradada permitida");
    } else {
        console.log("Voce e maio de idade entrada permitidada");
    }
}
verificarIdade(definirIdade);






