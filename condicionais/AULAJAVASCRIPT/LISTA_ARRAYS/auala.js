const frutas = ["banana", "maca", "morango", "uva"];

frutas.push("abacaxi");
frutas.sort();

console.log(frutas);


for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])

}


const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 1; i <= listaNumeros.length; i++) {
    if (listaNumeros[i] % 2 == 0) {
        console.log("numeros pares", listaNumeros[i])
    }

}






