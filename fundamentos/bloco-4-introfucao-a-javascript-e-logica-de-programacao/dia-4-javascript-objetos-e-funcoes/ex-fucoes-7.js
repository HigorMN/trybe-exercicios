// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// . Valor de teste: 'trybe' e 'be'
// . Valor esperado no retorno da função: true
// . verificaFimPalavra('trybe', 'be');
// . Retorno esperado: true
// . verificaFimPalavra('joaofernando', 'fernan');
// . Retorno esperado: false

function verificaFimPalavra(word, ending) {
    word = word.split('');
    ending = ending.split('');
    controle = true;
    for (let index = 0; index < ending.length; index += 1) {
      if (word[word.length - ending.length + index] != ending[index]) {
        controle = false;
      }
    }
    return controle;
  }

  console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));