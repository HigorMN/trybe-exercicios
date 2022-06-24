// 3- Considere o array de strings abaixo:
let array = ["java", "javascript", "python", "html", "css"];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let maior = array[0];
let menor = array[0];
for (let index = 1; index < array.length; index += 1) {
  if (array[index].length > maior.length) {
    maior = array[index];
  } else {
    menor = array[index];
  }
}

console.log("A maior palavra é:", maior);
console.log("A menor palavra é:", menor);
