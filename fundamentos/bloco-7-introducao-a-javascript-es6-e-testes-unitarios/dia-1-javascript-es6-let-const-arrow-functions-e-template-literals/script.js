const testingScope = (escopo) =>
  escopo === true
    ? console.log("ótimo, fui utilizada no escopo!")
    : console.log("Não devo ser utilizada fora meu escopo (else)");
// {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
// console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

testingScope(true);

const order = (a, b) => a - b;

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort(order);

console.log(
  `Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`
); // será necessário alterar essa linha 😉

function fatorial(num) {
  let resultado = 1;
  let cont = 1;
  while (cont <= num) {
    resultado *= cont;
    cont++;
  }
  return resultado;
}

console.log(fatorial(10));

function longestWord(string) {
  let maior = "";

  string.split(" ").forEach((word) => {
    if (word.trim().length > maior.length) {
      maior = word.trim();
    }
  });
  return maior;
}

console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
);

function trocarX(nome) {
  const frase = "Tryber x aqui!";
  let resultado = frase.replace("x", nome);
  return resultado;
}

function habi(h1, h2, h3) {
  let resultado = `Minhas três principais habilidades são:
  ${h1}
  ${h2}
  ${h3}`;
  return resultado;
}
console.log(`${trocarX("Bebeto")}
${habi('JavaScript', 'HTML', 'CSS')}`);
