/*const h1 = document.querySelector('h1')
const animaisLista = document.querySelector('.animais-lista')


console.log (h1.outerHTML)

h1.innerHTML = '<p>Novo Título</p>'

console.log (h1.innerHTML)

console.log (animaisLista.innerHTML)

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


const animais = document.querySelector('.animais')
const lista = document.querySelector('.animais-lista')
const contato = document.querySelector('.contato')
const titulo = document.querySelector('.contato .titulo')
const mapa = document.querySelector('.mapa')

console.log (contato)
console.log (animais)
console.log (titulo)

//animais.appendChild(titulo)
//contato.insertBefore(animais, mapa);


//contato.removeChild(titulo);
contato.replaceChild(lista, titulo);

const novoh1 = document.createElement('h1')

novoh1.innerText = 'Novo Título';
novoh1.classList.add('titulo')

const animais = document.querySelector('.animais')
const titulo = document.querySelector('.animais .titulo')


animais.replaceChild(novoh1, titulo);

const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais

const h1 = document.querySelector('h1')
const faq = document.querySelector('.faq')

const cloneh1 = h1.cloneNode(true);

cloneh1.classList.add('azul')

faq.appendChild(cloneh1)*/


// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu)



// Selecione o primeiro DT da dl de Faq
const faqLista = document.querySelector('.faq-lista')
const primeiroDT = faqLista.children[0]
console.log(primeiroDT)
// Selecione o DD referente ao primeiro DT

const DDreferente = primeiroDT.nextElementSibling
console.log(DDreferente)

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML
