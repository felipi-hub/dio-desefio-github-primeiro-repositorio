class pessoa {
    nome;
    idade;
    anoDeNacimento;

    constructor(nome, idade,) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNacimento = new Date().getFullYear() - idade;

    }

    descreva() {
        console.log(`meu nome e ${this.nome} e minha idade e ${this.idade} data de nascimento e ${this.anoDeNacimento}`);
    }
};
const pessoa1 = new pessoa("felipi delfino", 35);
const pessoa2 = new pessoa("bryan delfino", 6);

pessoa1.descreva();
pessoa2.descreva();

function compararPessoa(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} e mais velho que o  ${pessoa2.nome}`);

    } else if (pessoa2.idade > pessoa1.idade) {
        console.log(`${pessoa2.nome} e mais velha que a ${pessoa1}`);
    } else {
        console.log(`${pessoa1.nome}e a ${pessoa2.nome}tem a mesma idade`);
    }
}
compararPessoa(pessoa1, pessoa2)

/*const felipi = {
    nome: "felipi",
    idade: 35,


    descrever: function () {
        console.log(`meu nome e ${this.nome} e minha idade e ${this.idade}`);

    }
};
felipi.descrever();*/








