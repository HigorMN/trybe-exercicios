// 1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato:
// A soma de 35 a 105 é: X.

let soma = 0;

for (let index = 35; index <= 105; index += 1) {
  soma += index;
}

console.log("A soma de 35 a 105 é:", soma);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3.
// Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.

let contadorImpares = 0;

for (let index = 15; index <= 155; index += 1) {
    if(index % 3 === 0){
        contadorImpares++
    }
  }

  if(contadorImpares >= 50){
    console.log("A quantidade de numeros impares é maior que 50.");
  } else {
    console.log("A quantidade de numeros impares é menor que 50.");
  }

//3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração  que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

let jogador1 = "pedra"
let jogador2 = "tesoura"

let jogo = ["pedra", "papel", "tesoura"]

    if (jogador1 === jogo[0] && jogador2 === jogo[0]) {
        console.log("Empate");
    } else if (jogador1 === jogo[0] && jogador2 === jogo[1]){
        console.log("Jogador 2 vence");
    } else if (jogador1 === jogo[0] && jogador2 === jogo[2]){
        console.log("Jogador 1 vence");
    } else if (jogador1 === jogo[1] && jogador2 === jogo[0]){
        console.log("Jogador 1 vence");
    } else if (jogador1 === jogo[1] && jogador2 === jogo[1]){
        console.log("Empate");
    } else if (jogador1 === jogo[1] && jogador2 === jogo[2]){
        console.log("Jogador 2 vence");
    } else if (jogador1 === jogo[2] && jogador2 === jogo[0]){
        console.log("Jogador 2 vence");
    } else if (jogador1 === jogo[2] && jogador2 === jogo[1]){
        console.log("Jogador 1 vence");
    } else if (jogador1 === jogo[2] && jogador2 === jogo[2]){
        console.log("Empate");
    }

//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade” ou “A pessoa é menor de idade”.
// Bônus: Crie a condição utilizando operador ternário.
// let idade = 17;

// if (idade >= 18) {
//     console.log('A pessoa é maior de idade');
// } else {
//     console.log('A pessoa é menor de idade');
// }
let stop = true, age = 23;

age >= 18 ? (
    console.log("A pessoa é maior de idade")
) : (
    stop = false,
    console.log("A pessoa é menor de idade")
);



// 5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.

let ademar = 19;
let adriana = 40;
let julia = 15;

// Math.min(ademar, adriana, julia);

if(ademar < adriana && ademar < julia){
    console.log("Ademar é a pessoa mais nova");
} else if (adriana < ademar && adriana < julia){
    console.log("Adriana é a pessoa mais nova");
} else {
    console.log("Julia é a pessoa mais nova");
}