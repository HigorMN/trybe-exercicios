
        // Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        // - document.getElementById()
        // - document.getElementsByClassName()
        // - document.getElementsByTagName()
        // 1. Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        const texto = document.getElementById('paragrafo');
        texto.innerText = 'O melhor profissional que existe';

        // 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        const corMain = document.getElementsByClassName('main-content')[0];
        corMain.style.backgroundColor = 'rgb(76,164,109)'
        // 3. Crie uma função que mude a cor do quadrado vermelho para branco.
        const corSec = document.getElementsByClassName('center-content')[0];
        corSec.style.backgroundColor = 'white'
        // 4. Crie uma função que corrija o texto da tag <h1>.
        const titulo = document.getElementsByClassName('title')[0];
        titulo.innerText = 'Exerrcício 5.1 - JavaScript'
        // 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
