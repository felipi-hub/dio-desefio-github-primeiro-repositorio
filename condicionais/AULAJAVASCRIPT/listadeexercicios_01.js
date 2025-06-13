const nota1 = 9;
const nota2 = 8;
const nota3 = 6;

const media = 7;

const notaSemestre = (nota1 + nota2 + nota3) / 3;

if (notaSemestre < media) {
    console.log("sua media", notaSemestre.toFixed(1), "reprovou");

}
else if (notaSemestre >= media && notaSemestre <= media) {
    console.log("sua media", notaSemestre.toFixed(1), "recuperação");

}
else {
    console.log("sua media", notaSemestre.toFixed(1), "passou de semestre");
}