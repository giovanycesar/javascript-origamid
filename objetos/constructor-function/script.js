/*const carro = {
    marca: "Marca",
    preco: 0,
}


const honda = carro
honda.marca = "Honda"
honda.preco = 2000

const fiat = carro
fiat.marca = "Fiat"
fiat.preco = 3000
*/

function Carro (marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
  }

const honda = new Carro('Honda', 4000);


const fiat = new Carro("Fiat", 3000);

