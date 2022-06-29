// 1. Acesse o elemento elementoOndeVoceEsta.
const ex1 = document.querySelector('#elementoOndeVoceEsta')

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const ex2 = document.querySelector('#elementoOndeVoceEsta').parentElement

ex2.style.color = 'blue'

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const ex3 = document.querySelector('#primeiroFilhoDoFilho').innerText = 'Adicionando um texto';

// 4. Acesse o primeiroFilho a partir de pai.
const ex4 = document.querySelector('#pai').firstChild

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const ex5 = document.querySelector('#elementoOndeVoceEsta').firstChild

const ex6 = document.querySelector('#elementoOndeVoceEsta').nextSibling
