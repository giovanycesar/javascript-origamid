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
window.addEventListener('resize', handleEvent)*/


function callback (event) {
  console.log (event.key)
  if (event.key === "a") {
    document.body.classList.toggle('vermelho')
  } else if (event.key === "v") {
    document.body.classList.toggle('azul')
  }
}

window.addEventListener('keydown', callback)
