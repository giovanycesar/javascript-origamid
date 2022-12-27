/*const h1 = document.querySelector('h1')
const animaisLista = document.querySelector('.animais-lista')


console.log (h1.outerHTML)

h1.innerHTML = '<p>Novo Título</p>'

console.log (h1.innerHTML)

console.log (animaisLista.innerHTML)*/

const lista = document.querySelector('.animais-lista')

console.log (lista.parentElement.parentElement)
console.log (lista.nextElementSibling)
console.log (lista.previousElementSibling)
console.log (lista.children)
console.log (lista.children[lista.children.length-1])


console.log(lista.querySelectorAll('li'))
console.log(lista.querySelectorAll('li:last-child'))

console.log (lista.childNodes)
console.log (lista.previousSibling)