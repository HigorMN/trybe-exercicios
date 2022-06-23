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

for (let index = 15; index <= 200; index += 1) {
    if(index % 3 === 0){
        contadorImpares++
    }
  }

  if(contadorImpares >= 50){
    console.log("Mensagem segcreta: Deu certo!!!!");
  } else {
    console.log("Deu Ruim :(");
  }

//3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração  que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

let jogador1 = "pedra"
let jogador2 = "pedra"

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
