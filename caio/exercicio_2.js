// 1) Diferença do maior pelo menor
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
console.log("Diferença:", Math.abs(num1 - num2));

// 2) Verificar se a centena é par ou ímpar
let num = parseInt(prompt("Digite um número de três dígitos:"));
let centena = Math.floor(num / 100);
console.log(centena % 2 === 0 ? "Par" : "Ímpar");

// 3) Cálculo da média ponderada
let a1 = parseFloat(prompt("Digite a nota da primeira avaliação:"));
let a2 = parseFloat(prompt("Digite a nota da segunda avaliação:"));
let a3 = parseFloat(prompt("Digite a nota da terceira avaliação:"));
let media = (a1 * 2 + a2 * 3 + a3 * 5) / 10;
console.log("Média:", media.toFixed(2));
console.log(media >= 6 ? "Aprovado" : "Reprovado");

// 4) Controle de pesca
let peso = parseFloat(prompt("Digite o peso dos peixes:"));
let limite = 50;
if (peso > limite) {
    let excesso = peso - limite;
    let multa = excesso * 4;
    console.log(`Excesso: ${excesso} kg, Multa: R$ ${multa.toFixed(2)}`);
} else {
    console.log("Dentro do regulamento");
}

// 5) Ordenar dois nomes
let nome1 = prompt("Digite o primeiro nome:");
let nome2 = prompt("Digite o segundo nome:");
console.log("Nomes em ordem alfabética:", [nome1, nome2].sort());

// 6) Verificar divisibilidade por 3 e 5
let numero = parseInt(prompt("Digite um número:"));
console.log(numero % 3 === 0 && numero % 5 === 0 ? "Divisível por 3 e por 5" : "Não é divisível por 3 e por 5 ao mesmo tempo");

// 7) Verificar se um ano é bissexto
let ano = parseInt(prompt("Digite um ano:"));
if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log("Ano bissexto");
} else {
    console.log("Não é ano bissexto");
}

// 8) Verificar sexo digitado
let sexo = prompt("Digite o sexo (M/F):").trim().toUpperCase();
console.log(["M", "F"].includes(sexo) ? "Sexo válido!" : "Sexo inválido!");

// 9) Cálculo da taxa de transferência de veículo
let anoCarro = parseInt(prompt("Digite o ano do carro:"));
let precoCarro = parseFloat(prompt("Digite o preço do carro:"));
let taxa = anoCarro < 2010 ? 0.025 : 0.035;
let valorTaxa = precoCarro * taxa;
console.log(`Taxa de transferência: R$ ${valorTaxa.toFixed(2)}`);
