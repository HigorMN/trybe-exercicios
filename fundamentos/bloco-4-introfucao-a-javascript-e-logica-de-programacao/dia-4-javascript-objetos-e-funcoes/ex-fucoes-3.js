// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// . Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// . Valor esperado no retorno da função: 6.

function indiceDoMaiorValor(arrayDeInteios) {
    let indiceMenor = 0;
    for (indice in arrayDeInteios) {
        if(arrayDeInteios[indiceMenor] > arrayDeInteios[indice]){
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}

console.log(indiceDoMaiorValor([2, 4, 6, 7, 10, 0, -3]));