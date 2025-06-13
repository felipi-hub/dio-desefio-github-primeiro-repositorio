const entrada = [5, 50, 10, 98, 23];
let i = 0;

function get() {
    const valor = entrada[i];
    i++;
    return valor;
}
function print(felipi) {
    console.log(felipi)
}





module.exports = { get, print };

