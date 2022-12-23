/*const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

console.log (height)

console.log (animaisTop)

const primeiroh2 = document.querySelector('h2')

const h2Left = primeiroh2.offsetLeft;

console.log (h2Left)


const h2rect = primeiroh2.getBoundingClientRect()

console.log (h2rect)

console.log (
window.innerWidth, // width do janela
window.outerWidth, // soma dev tools também
window.innerHeight, // height do janela
window.outerHeight, // soma a barra de endereço

window.pageYOffset, // distância total do scroll vertical
window.pageXOffset, // distância total do scroll horizontal
)

if (h2rect.top<0) {
  console.log ('Passou do elemento!')
}

if(window.innerHeight < 1000) {
  console.log('Tela menor que 1000px');
}


const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Usuário mobile!')
} else {
  console.log('Usuário desktop!')
} */

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiroimg = document.querySelector('img')
console.log (primeiroimg.offsetTop)


// Retorne a soma da largura de todas as imagens

const todasimg = document.querySelectorAll('img')
let soma = 0

function somaImagens() {
  
  todasimg.forEach (function(item) {
    soma += item.offsetWidth;
});
  console.log (soma)
}

window.onload = function() {
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')
console.log (links);
c = 0
links.forEach (function(item) {

  largura = item.clientWidth;
  altura = item.clientHeight;
  c += 1

  if (largura >= 48 && altura >= 48) {
    console.log (`Link ${c} com ${largura} de largura e ${altura} de altura é Adequado.!`)
  } else {
    console.log (`Link ${c} com ${largura} de largura e ${altura} de altura é NÂO é Adequado.!`)
  }
});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu = document.querySelector('.menu')


const browserSmall = window.matchMedia('(max-width: 720px)');

if(browserSmall.matches) {
  console.log('Usuário mobile!')
  menu.classList.add('menu-mobile')
} else {
  console.log('Usuário desktop!')
}
