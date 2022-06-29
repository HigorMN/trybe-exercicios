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
document.querySelector('#elementoOndeVoceEsta').parentElement.firstElementChild

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const ex6 = document.querySelector('#elementoOndeVoceEsta').nextSibling

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const ex7 = document.querySelector('#elementoOndeVoceEsta').nextElementSibling

// 8. Agora acesse o terceiroFilho a partir de pai.

const ex8 = document.querySelector('#pai').lastElementChild.previousElementSibling

// 9. Crie um irmão para elementoOndeVoceEsta.
const ex9 = document.querySelector('#pai')
const newDiv = document.createElement('div')
ex9.appendChild(newDiv)

// 10. Crie um filho para elementoOndeVoceEsta.
const ex10 = document.querySelector('#elementoOndeVoceEsta')
const newDiv2 = document.createElement('div')
ex10.appendChild(newDiv2)

// 11. Crie um filho para primeiroFilhoDoFilho.
const ex11 = document.querySelector('#primeiroFilhoDoFilho')
const newDiv3 = document.createElement('div')
ex11.appendChild(newDiv3)

// 12. A partir desse filho criado, acesse terceiroFilho.
const ex12 = document.querySelector('#primeiroFilhoDoFilho').firstElementChild.parentElement.parentElement.parentElement.lastChild.previousElementSibling.previousElementSibling

// 13. Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.