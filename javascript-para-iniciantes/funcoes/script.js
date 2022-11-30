/*function areaQuadrado (lado) {
    return lado * lado
}

console.log (areaQuadrado (4))

function pi () {
    return 3.14
}

var total = 5 * pi ()

console.log (total)*/


/*function corFavorita (cor) {
    if (cor === "azul") {
        return "Olhe para o céu."
    } else if (cor === "verde") {
        return "Olhe para a floresta."
    } else if (cor === "vermelho") {
        return "Olhe para as flores."
    } else {
        return "Feche os olhos"
    }
}
console.log (corFavorita("verde"))

addEventListener ('click', function () {console.log ("Oi.")})*/

/*function imc (peso, altura) {
    var imc = peso / (altura**2) 
    if (imc <= 16.9) {
       return `Seu imc é igual a ${imc.toFixed(2)}! Você está muito abaixo do peso.`  
    } else if (imc >= 17 && imc <=18.4) {
       return `Seu imc é igual a ${imc.toFixed(2)}! Você está abaixo do peso.` 
    } else if (imc >= 18.5 && imc <= 24.9) {
       return `Seu imc é igual a ${imc.toFixed(2)}! Você está com peso normal.` 
    } else if (imc >= 25 && imc <= 29.9) {
       return `Seu imc é igual a ${imc.toFixed(2)}! Você está acima do peso.` 
    } else {
       return `Seu imc é igual a ${imc.toFixed(2)}! Você está obeso.`
    }
   }
   console.log (imc (75, 1.91))


   function terceiraIdade (idade) {
    if (typeof idade !== "number") {
        return "Informe sua idade."
    } else if (idade >= 60) {
        return true
    } else {
        return false
    }
    console.log (idade)
   }

   console.log (terceiraIdade (60))


   function paises (paisesVisitados) {
    var totalPaises = 193
    return `Faltam visitar ${totalPaises - paisesVisitados} países!`
   }

   console.log (paises (40))*/

   function isTruthy (n) {
    return !!n
   }

   console.log (isTruthy (60))



   function perimetroQuadrado (lado) {
    return (lado * 4)
   }

   console.log (perimetroQuadrado (8))



   function nomeCompleto (nome, sobrenome) {
    return `${nome} ${sobrenome}`
   }

   console.log (nomeCompleto ("Giovany", "César"))



   function numeroPar (n) {
    if (n % 2 === 0) {
        return "O número é par."
    } else {
        return "O número é impar."
    }
   }
   console.log (numeroPar (20))

   


   function valor (n) {
   return typeof n
   }

   console.log (valor ("Giovany"))

   addEventListener ('click', function () { console.log ("Giovany Almeida")
   })


   var totalPaises = 193;

   function precisoVisitar (paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  
  function jaVisitei (paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));