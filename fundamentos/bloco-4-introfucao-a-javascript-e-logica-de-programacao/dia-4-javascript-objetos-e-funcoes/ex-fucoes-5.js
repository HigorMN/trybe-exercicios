// 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// . Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// . Valor esperado no retorno da função: 2.

function maisRepetido(numeros) {
  let contarNumero = 0;
  let numerosRepitidos = 0;
  let numeroMaisRepitido = 0;

  for (index in numeros) {
    let numeroIndex = numeros[index]
    for (index2 in numeros){
      if (numeroIndex === numeros[index2]){
        numerosRepitidos += 1
      }
    }
    if (numerosRepitidos > contarNumero) {
      contarNumero = numerosRepitidos;
      numeroMaisRepitido = numeros[index];
    }
    numerosRepitidos = 0;
  }
  return numeroMaisRepitido;
}
  
  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3,]));