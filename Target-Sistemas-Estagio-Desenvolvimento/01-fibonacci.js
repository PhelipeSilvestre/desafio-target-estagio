/* 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. */

function isFibonacci(numeroEscolhido) {
  let num1 = 0;
  let num2 = 1;
  let nextNum = 0;

  while (nextNum <= numeroEscolhido) {
    if (nextNum == numeroEscolhido) {
      return true;
    }
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }

  return false;
}

if (isFibonacci) {
  console.log("O número informado pertence a sequência de Fibonacci.");
} else {
  console.log("O número informado não pertence a sequência de Fibonacci.");
}
