//a) Defina 3 variáveis com valores que armazenem:

//i) O nome de uma fruta;
//ii) O nome de verdura; e
//iii) O nome de um legume.

var fruta = 'pera'
var verdura = 'alface'
var legume = 'cebola'
console.log('Aqui está o nome de uma fruta, ' + fruta + ' nome de uma verdura, ' + verdura, ' nome de um legume, ' + legume +'.')
console.log('------------------------------------------------')

//2)Altere o código anterior para conter mais três variáveis, com o preço unitário da fruta,
//verdura e legume. Depois, mostre o preço de cada produto após o nome (nome ao lado do
//preço, por exemplo: “Maçã: 10”)//

var fruta_prec = 'R$ 10,00'
var verdura_prec = 'R$ 15,00'
var legume_prec = 'R$ 25,00'
console.log('O preço da fruta, ' + fruta, 'é ' + fruta_prec,'.')
console.log('O preço da verdura, ' + verdura, 'é ' + verdura_prec,'.')
console.log('O preço da legume, ' + legume, 'é ' + legume_prec,'.')
console.log('------------------------------------------------')

//3) Crie um código que calcule e apresente o dobro e o triplo de um número;

var dobro = 2 * 2
var triplo = 3 * 3
console.log('O calculo do dobro de 2, ' + dobro)
console.log('O triplo de 3, ' + triplo)

//4) Escreva as seguintes expressões matemáticas 
//utilizando operadores:
var x = 2
var y = 3
var sum = (3*x**3*y**2 - 5*x*y**2) //216 primeiro valor //126
console.log(sum)
console.log('-------------------------------------------------')
const delta = b * b - 4 * a * c;

var a = 2
var b = 10 
var c =  20

var bask = -b + Math.sqrt(delta) / (2*a);
//(-b + Math.sqrt(delta)) / (2 * a);