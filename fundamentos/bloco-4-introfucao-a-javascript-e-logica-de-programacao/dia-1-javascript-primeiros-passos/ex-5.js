// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const a = 60;
const b = 90;
const c = 30;

let soma = a + b + c;
let somaPossitiva = a > 0 && b > 0 && c > 0;
if (somaPossitiva) {
  if (soma === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Erro");
}
