/*var possuiGraducao = true
var possuiDoutorado = false

if (possuiGraducao, possuiDoutorado) {
    console.log ("Possui graduação e doutorado.")
} else if (possuiGraducao) {
    console.log ("Possui somente gradução.")
} else {
    console.log ("Não possui neenhum dos dois.")
}

if (!possuiDoutorado) {
    console.log ("Possui doutorado.")
}

if ((5-5) && (5+5)) {
    console.log ("Verdadeiro")
} else {
    console.log ("Falso")
}

var condicional = (5+5) || (5-5) || (10+6)
console.log (condicional)

var corFavorita = "Amarelo"

switch (corFavorita) {
    case "Azul":
    console.log ("Olhe para o céu.")
    break
    case "Amarelo":
    console.log ("Olhe para o sol.")
    break
    case "Verde":
    console.log ("Olhe para a floresta.")
    break
    default:
    console.log ("Feche os olhos")
    
}*/

var idadeG = 24
var idadeM = 49

if (idadeG > idadeM) {
    console.log ("É maior.")
} else if (idadeG < idadeM) {
    console.log ("É menor.")
} else { 
    console.log ("É igual.")
}

var expressao = (5-2) && (5 - " ") && (5-2)
console.log (expressao)

var nome = "Giovany"
var idade = 24
var possuiDoutorado = false
var empregoFuturo;
var dinheiroNaconta = 0

/*if (nome) {
    console.log ("Verdadeiro")
} else {
    console.log ("Falso")
}

if (idade) {
    console.log ("Verdadeiro")
} else {
    console.log ("Falso")
}

if (possuiDoutorado) {
    console.log ("Verdadeiro")
} else {
    console.log ("Falso")
}

if (empregoFuturo) {
    console.log ("Verdadeiro")
} else {
    console.log ("Falso")
}

if (dinheiroNaconta) {
    console.log ("Verdadeiro")
} else {
    console.log ("Falso")
}*/

console.log (!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaconta)

var brasil = 207
var china = 1340

if (brasil > china) {
    console.log ("O Brasil tem mais habitantes.")
} else if (brasil < china) {
    console.log ("A China tem mais habitantes.")
} else { 
    console.log ("O número de habitantes é igual.")
}

if (("Gato" === "gato") && (5 > 2)) {
    console.log ("Verdadeiro")
} else {
    console.log ("Falso")
}

if (("Gato" === "gato") || (5 > 2)) {
    console.log ("Gato" && "Cão")
} else {
    console.log ("Falso")
}