/*const menu = document.querySelector('.menu')
menu.classList.add('ativo')
menu.classList.remove('azul')
menu.classList.toggle('azul')


if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul')
} else {
  menu.classList.add('nao-possui-azul')
}

menu.className += " vermelho"

console.log (menu.className)

const animais = document.querySelector('.animais')

console.log (animais.attributes[0])

console.log (animais.attributes['data-texto'])

const img = document.querySelector('img')

console.log (img.getAttribute('src'))
console.log (img.getAttribute('alt'))

img.setAttribute('alt', 'é uma raposa')


const possuiAlt = img.hasAttribute('alt')
console.log (possuiAlt)

console.log (img.removeAttribute('alt'))

const carro = {
  portas: 4,
  andou: function (km) {
    console.log (`Andou ${km}.`)
  }
} */

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')
itensMenu.forEach (function(item){
  item.classList.add('ativo')
  })

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach (function(item){
  if (item != itensMenu[0]) {
    item.classList.remove('ativo')
  }
  })

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img')

imgs.forEach (function(item){
  console.log (item, item.hasAttribute('alt'))
  })
 
// Modifique o href do link externo no menu

/*const hrefMenu = document.querySelectorAll('.menu a')

hrefMenu.forEach (function(item){
  if (item == hrefMenu[3]) {
    console.log (item)
    item.setAttribute('href', 'modificado')
  }
  })*/

  const link = document.querySelector('a[href^="http"')
  console.log (link)

  link.setAttribute('href', '#modificado')
