// Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
// Bem-vinda, Margarida

console.log("Bem-vinda,", info.personagem);

// "FOGUETE" 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info['recorrente'] = "Sim";

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console: 
// personagem
// origem
// nota
// recorrente

for(chaves in info){
    console.log(chaves);
}