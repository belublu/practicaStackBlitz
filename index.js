// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/* var binario = "0111111"
var octal = "007"
var hexa = "3F"
console.log(parseInt(binario, 2) + " en binario " + binario)
console.log(parseInt(octal, 8) + " en octal " + octal)
console.log(parseInt(hexa, 16) + " en hexadecimal " + hexa) */

/* let div
let num = 2
if (div == 0) {
  alert('No se puede dividir por 0');
} else {
  alert(num / 0);
}
  */

/* var lista = ["manzanas", "peras", "uvas", "bananas"]
for (let item of lista)
console.log(item) */

/* var lista = [1, 2, 3, 4, 0, 5, 6, 7]
for (var item of lista){
  if (item % 2 != 0)
  console.log(item)
} */

/* var item
var ficha = {
  nombre: "juan",
  edad: 23,
  nacionalidad: "española"
}
for (item in ficha){
  console.log(item + ": " + ficha[item])
} */

/* let precio = 100
let iva = 21
let ivaTotal = (precio * iva) / 100
let compra = precio + ivaTotal
console.log ("El total de su compra es $" + compra) */

let lado = 40
let area = lado * lado
let perimetro = lado * 4
console.log("El area del cuadrado es: " + area + " y su perímetro es:" + perimetro)