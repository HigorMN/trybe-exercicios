// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// . Array de teste: [2, 3, 6, 7, 10, 1];.
// . Valor esperado no retorno da função: 4.

function indiceDoMaiorValor(ArrayDeInteios) {
    let indiceMaior = 0;
    for (indice in ArrayDeInteios) {
        if(ArrayDeInteios[indiceMaior] < ArrayDeInteios[indice]){
            indiceMaior = indice;
        }
    }
    return indiceMaior;
}

console.log(indiceDoMaiorValor([2, 3, 6, 7, 10, 1]));
