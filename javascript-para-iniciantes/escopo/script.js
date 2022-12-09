'use strict'

/*function mostrarCarro () {
    var carro = "Fusca"; // tirar o nome var faz perder o escopo da função
    console.log (carro);
}

mostrarCarro ()

if (true) {
    let mes = "Dezembro" // let possui escopo de bloco, o var vaza dentro de qualquer bloco, como for, while, if
    console.log (mes)
} 

for ( let i = 0; i < 10; i++) {
    console.log (`Número ${i}`)
}

console.log(i)

const semana = "Sexta" // const mantém o escopo, só deixa atribuir um valor, impede a redeclaração e modificação da variável

console.log (semana)

const dados = {
    idade: 28,
    nome: "Giovany",
    ano: 1998,
}

dados.idade = 24 // é possível mudar o valor de uma propriedade do objeto, mas não o objeto 
dados.sexo = "M"


let anoNascimento = 1998
anoNascimento = 1996 //let mantém o escopo, só deixa atribuir um valor, impede a redeclaração, mas deixa modificar a variável

console.log (anoNascimento) */


// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
  }
    
  // Como corrigir o erro abaixo?

  const dois = 2;
  function somarDois(x) {
    return x + dois;
  }

  function dividirDois(x) {
    return x / dois;
  }
  console.log (somarDois(4));
  console.log (dividirDois(6));


  // O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);