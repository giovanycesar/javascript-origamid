/*var pessoa = {
    nome: "Giovany",
    idade: 24,
    profissao: "Tradutor"
}

var quadrado = {
    lados: 4,
    area (lado) {
        return lado * lado
    },
    perimetro (lado) {
        lados: 4
        return lado * this.lados
    }
}


console.log (quadrado.area (5))
console.log (quadrado.perimetro (5))

console.log (Math.PI)

console.log (Math.random ())

*/

var menu = {
    height: 800,
    width: 600,
    backgroundcolor: "#84E",
    metadeHeight () {
        return this.height /2
    }
}

var bg = menu.backgroundcolor
menu.backgroundcolor = "#000"

menu.color = "blue"

var dados = {
    nome: "Giovany",
    sobrenome: "César",
}

dados.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
}

console.log(dados.nomeCompleto())

var carro = {
    preco: 1000,
    portas: 4,
    marca: "Audi",
}

carro.preco = 3000


var cachorro = {
    raca: "labrador",
    cor: "preto",
    idade: 10,
    latir (pessoa) {
        if (pessoa == "homem") {
            return "Cachorro late"
        } else {
            return "Cachorro não late"
        }
    }
}

console.log (cachorro.latir("homem"))