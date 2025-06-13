const { get, print } = require("./funcoes-auxiliares");

const numeroSorteado = [];

for (let i = 0; i < 5; i++) {
    const numero = get();
    numeroSorteado.push(numero)

}
print(numeroSorteado)






