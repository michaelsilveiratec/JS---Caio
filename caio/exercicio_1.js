
//1-
// Definição das variáveis
var fruta = "Maçã";
var verdura = "Alface";
var legume = "Cenoura";

// Exibição da mensagem
console.log("Aqui estão os nomes de uma fruta, uma verdura e um legume:");
console.log(`Fruta: ${fruta}`);
console.log(`Verdura: ${verdura}`);
console.log(`Legume: ${legume}`);

//-----------------------------------------------------------------------------
//2 - 

// Definição das variáveis
let fruta = "Maçã";
let verdura = "Alface";
let legume = "Cenoura";

let precoFruta = 10;
let precoVerdura = 5;
let precoLegume = 7;

// Exibição da mensagem
console.log("Aqui estão os nomes de uma fruta, uma verdura e um legume com seus respectivos preços:");
console.log(`Fruta: ${fruta} - Preço: ${precoFruta}`);
console.log(`Verdura: ${verdura} - Preço: ${precoVerdura}`);
console.log(`Legume: ${legume} - Preço: ${precoLegume}`);
//-----------------------------------------------------------------------------------

//3 -
// Cálculo do dobro e do triplo de um número
tempNumber = 4; // Você pode alterar esse valor conforme necessário
let dobro = tempNumber * 2;
let triplo = tempNumber * 3;

console.log(`Número: ${tempNumber}`);
console.log(`Dobro: ${dobro}`);
console.log(`Triplo: ${triplo}`);

//------------------------------------------------------------------------------------
//4-Expressão: 3x³y² - 5xy²  //tem que importar o math
let x = 2, y = 3;
let resultado1 = 3 * Math.pow(x, 3) * Math.pow(y, 2) - 5 * x * Math.pow(y, 2);
console.log(`Resultado da expressão 3x³y² - 5xy²: ${resultado1}`);

// Fórmula de Bhaskara
let a = 1, b = -3, c = 2;
let delta = Math.pow(b, 2) - 4 * a * c;
let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);
console.log(`Raízes da equação quadrática: x1 = ${x1}, x2 = ${x2}`);

// Expressão log3(x²) + e + e^π + π^e
let resultado2 = (Math.log(x * x) / Math.log(3)) + Math.E + Math.pow(Math.E, Math.PI) + Math.pow(Math.PI, Math.E);
console.log(`Resultado da expressão log3(x²) + e + e^π + π^e: ${resultado2}`);



//-----------------------------------------------------------------------------------
//5 Conversão de Celsius para Fahrenheit
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`Temperatura: ${celsius}°C = ${fahrenheit}°F`);

// Cálculo da média de atividades contínuas
let notas = [8, 7, 9, 6];
let somaNotas = notas.reduce((a, b) => a + b, 0);
let media = somaNotas / 7;
console.log(`Média das atividades contínuas: ${media.toFixed(2)}`);

//7 Conversão de metros para milímetros
let metros = 2;
let milimetros = metros * 1000;
console.log(`${metros} metros = ${milimetros} milímetros`);

//8 Cálculo da área de um círculo
let raio = 5;
let areaCirculo = Math.PI * Math.pow(raio, 2);
console.log(`Área do círculo com raio ${raio}: ${areaCirculo.toFixed(2)}`);

//9 Cálculo da área de um quadrado e seu dobro
let ladoQuadrado = 4;
let areaQuadrado = ladoQuadrado * ladoQuadrado;
console.log(`Área do quadrado: ${areaQuadrado}, Dobro da área: ${areaQuadrado * 2}`);

//10 Cálculo do salário mensal
let salarioPorHora = 20;
let horasTrabalhadas = 160;
let salarioMensal = salarioPorHora * horasTrabalhadas;
console.log(`Salário mensal: R$${salarioMensal}`);

//11 Divisão de dois inteiros
let num1 = 10, num2 = 2;
console.log(`Divisão de ${num1} por ${num2}: ${num1 / num2}`);

//12 Divisão de dois números flutuantes
let numFloat1 = 10.5, numFloat2 = 2.5;
console.log(`Divisão de ${numFloat1} por ${numFloat2}: ${numFloat1 / numFloat2}`);

//13 Volume de uma lata de óleo
let alturaLata = 10;
let volumeLata = Math.PI * Math.pow(raio, 2) * alturaLata;
console.log(`Volume da lata de óleo: ${volumeLata.toFixed(2)}`);