/*const img = document.querySelector('img')
console.log (img)

function callback(event) {
  console.log ("Clicou", event);
}


img.addEventListener('click', callback)

const imgLista = document.querySelector('.animais-lista')

function callbackLista(event) {
  console.log (event.target, event.currentTarget, event.type);
}


imgLista.addEventListener('click', callbackLista)

const linkExterno = document.querySelector('a[href^="https"]')


function callbackLink(event) {
  event.preventDefault();
  console.log (this)
}


linkExterno.addEventListener('click', callbackLink)

const h1 = document.querySelector('h1')

function handleEvent(event) {
  console.log (event.type, event)
}


h1.addEventListener('click', handleEvent)
h1.addEventListener('mouseenter', handleEvent)
h1.addEventListener('mousemove', handleEvent)

window.addEventListener('scroll', handleEvent)
window.addEventListener('resize', handleEvent)


function callback (event) {
  console.log (event.key)
  if (event.key === "a") {
    document.body.classList.toggle('vermelho')
  } else if (event.key === "v") {
    document.body.classList.toggle('azul')
  }
}

window.addEventListener('keydown', callback)

const imgs = document.querySelectorAll('img')
console.log (imgs)

function handleImg(event) {
  console.log (event.target.getAttribute('src'))
}


imgs.forEach (function(item){
  item.addEventListener('click', handleImg)
  })*/


  // Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
/*

const linksInterno = document.querySelectorAll('a[href^="#"]')
console.log (linksInterno)

function handleLink(event) {
  console.log(event.target)
  event.preventDefault();

  linksInterno.forEach (function(item){
    item.classList.remove('ativo')
  })

  event.target.classList.add('ativo')
}


linksInterno.forEach (function(item){
  item.addEventListener('click', handleLink)
  })*/


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

/*

const elementos = document.querySelector('body')
console.log (elementos)


function handleElementos(event) {
  console.log (event.target)
}

elementos.addEventListener('click', handleElementos)*/ 

/*const elementos = document.querySelectorAll('body *')
console.log (elementos)


function handleElementos(event) {
  console.log (event.currentTarget)
}

elementos.forEach (function(item){
  item.addEventListener('click', handleElementos)
})*/

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

/*function handleElementos(event) {
  event.currentTarget.remove()
}

elementos.forEach (function(item){
  item.addEventListener('click', handleElementos)
})*/

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 



function callback (event) {
  console.log (event.key)
  if (event.key === "t") {
    document.body.classList.toggle('grande')
  }
}

window.addEventListener('keydown', callback)