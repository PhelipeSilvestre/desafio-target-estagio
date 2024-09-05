/*2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre. */

let string = "Desafio de programação Target";
let letra = "a";
let cont = 0;

for (let i = 0; i < string.length; i++) {
  if (string[i] === letra || string[i] === letra.toUpperCase()) {
    cont++;
  }
}

console.log(`A letra ${letra} aparece ${cont} vezes na string "${string}"`);
