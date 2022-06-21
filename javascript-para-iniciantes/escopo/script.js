'use strict'

/*function mostrarCarro () {
    var carro = "Fusca"; // tirar o nome var faz perder o escopo da função
    console.log (carro);
}

mostrarCarro ()

if (true) {
    let mes = "Dezembro" // let possui escopo de bloco, o var vaza dentro de qualquer bloco, como for, while, if
    console.log (mes)
} */

const semana = "Sexta" // const mantém o escopo, só deixa atribuir um valor, impede a redeclaração e modificação da variável

console.log (semana)

const dados = {
    idade: 28,
    nome: "Giovany",
    ano: 1998,
}

dados.idade = 24 // é possível mudar o valor de uma propriedade do objeto, mas não o objeto 


let anoNascimento = 1998
anoNascimento = 1996 //let mantém o escopo, só deixa atribuir um valor, impede a redeclaração, mas deixa modificar a variável

console.log (anoNascimento) 