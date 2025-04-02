function contaDivisores(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) count++;
    }
    return count;
}

function ehPrimo(n) {
    return contaDivisores(n) === 2;
}

function exibePrimos(a, b) {
    let primos = [];
    for (let num = a; num <= b; num++) {
        if (ehPrimo(num)) primos.push(num);
    }
    console.log(primos.join(' '));
}

function somaPrimos(a, b) {
    let soma = 0;
    for (let num = a; num <= b; num++) {
        if (ehPrimo(num)) soma += num;
    }
    return soma;
}

function exibeMsg() {
    console.log("Este programa converte temperaturas entre Celsius e Fahrenheit.");
}

function getConvertePara() {
    return prompt("Digite 'F->C' para converter de Fahrenheit para Celsius ou 'C->F' para Celsius para Fahrenheit:");
}

function exibeFahrenheitParaCelsius(inicio, fim) {
    for (let f = inicio; f <= fim; f++) {
        let c = (f - 32) * 5 / 9;
        console.log(`${f}°F = ${c.toFixed(2)}°C`);
    }
}

function exibeCelsiusParaFahrenheit(inicio, fim) {
    for (let c = inicio; c <= fim; c++) {
        let f = (c * 9 / 5) + 32;
        console.log(`${c}°C = ${f.toFixed(2)}°F`);
    }
}

function fatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function somaDigitos(n) {
    return n.toString().split('').reduce((acc, digito) => acc + parseInt(digito), 0);
}

function fibonacci(n) {
    if (n === 1 || n === 2) return 1;
    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

function mmc(a, b) {
    let maior = Math.max(a, b);
    while (true) {
        if (maior % a === 0 && maior % b === 0) return maior;
        maior++;
    }
}

function mdc(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function calcularIMC(peso, altura) {
    return peso / (altura ** 2);
}

// Respostas para as questões 5 a 9:
const respostas = {
    5: true,  // Uma função pode ser chamada em qualquer lugar desde que o tipo de retorno seja apropriado.
    6: true,  // Uma expressão pode conter várias chamadas de função.
    7: true,  // Funções podem receber como parâmetros chamadas de outras funções.
    8: false, // Nem toda função que retorna um valor precisa ter parâmetros.
    9: true   // Variáveis globais podem ser acessadas por qualquer função, a menos que sejam redefinidas localmente.
};

// Exibição das respostas
for (const [key, value] of Object.entries(respostas)) {
    console.log(`Questão ${key}: ${value}`);
}
