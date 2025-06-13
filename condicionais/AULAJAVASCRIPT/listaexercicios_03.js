


const precoEtiqueta = 100;
const formaPagamento = 4;


function aplicaDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}
function semDesconto(valor, valorND) {
    return (valor / valorND);
}
function aplicarJuros(valor, juros) {
    return valor + (valor * juros / 100);
}


if (formaPagamento == 1) {

    console.log("Opção 1 Valor do desconto", aplicaDesconto(precoEtiqueta, 10).toFixed(2));

} else if (formaPagamento == 2) {

    console.log("Opção 2 valor de desconto", aplicaDesconto(precoEtiqueta, 15).toFixed(2));

} else if (formaPagamento == 3) {

    console.log("Opção 3 valor pago em duas vez não tem desconto", semDesconto(precoEtiqueta, 2).toFixed(2))

} else {

    console.log("Opção 4 valor acima de duas parcela com juros", aplicarJuros(precoEtiqueta, 10).toFixed(2))
}



