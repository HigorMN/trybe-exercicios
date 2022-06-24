// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// . Exemplo de palíndromo: arara.
// . verificaPalindrome('arara');
// . Retorno esperado: true
// . verificaPalindrome('desenvolvimento');
// . Retorno esperado: false

function ehplindromo(palindromo) {

    let inverte = palindromo.split('').reverse().join('')

    if (palindromo === inverte) {
        console.log(true);
    } else {
        console.log(false);
    }
}

ehplindromo('arara')

