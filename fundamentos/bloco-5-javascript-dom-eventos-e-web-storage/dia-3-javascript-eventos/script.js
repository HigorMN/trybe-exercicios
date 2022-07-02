function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1:
function decemberDays() {
  let decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ]; // armazena a lista dos dias de dezembro em um array
  const diaList = document.getElementById("days"); // pega o elemento que tem o id days a "ul"
  // um for que percorre todo o array decemberDaysList
  for (let diasList = 0; diasList < decemberDaysList.length; diasList += 1) {
    let days31 = decemberDaysList[diasList]; // armazena cada dia que percorre no for em uma variavel
    let dias = document.createElement("li"); // cria um elemento lista li
    dias.innerText = days31; // adiciona cada dia que percore no for e armazena na li
    dias.className = "day"; // da uma classe para todos os dias da lista
    if (days31 === 24 || days31 === 25 || days31 === 31) {
      dias.classList.add("holiday"); // se for feriado coloca a classe holiday
    }

    if (days31 === 4 || days31 === 11 || days31 === 18 || days31 === 25) {
      dias.classList.add("friday"); // se for sexta fera coloca a classa friday
    }
    diaList.appendChild(dias); // adiciona a lista li como filho da ul lista não ordenada
  }
}

decemberDays(); // coloca a função pra funcionar na pagina

//  Exercício 2:
const conteinerBotao = document.querySelector(".buttons-container"); // pega a conteiner que armazena o botão
function feriados() {
  const paragrafoFeriados = document.createElement("p"); //cria um paragrafo
  const botao = document.createElement("button"); // cria um botão
  botao.id = "btn-holiday"; // coloca id no botão
  botao.appendChild(paragrafoFeriados).innerText = "Feriado"; // coloca o paragrafo como filho do botão e adiciona um texto
  conteinerBotao.appendChild(botao); // coloca o botão como filho do conteiner
}

feriados(); // coloca a função pra funcionar na pagina

//Ecercício 3:

function displayHolidays() {
  let pegarHoliButton = document.querySelector("#btn-holiday"); // pega o botão
  let pegarHolidias = document.querySelectorAll(".holiday"); // pega os dias de evento holiday
  let backgroundColor = "rgb(238,238,238)"; // armazenar a cor de fundo
  let novaCor = "white"; // a cor que vai mudar
  pegarHoliButton.addEventListener("click", function () {
    // ao clicar
    for (let index = 0; index < pegarHolidias.length; index += 1) {
      //for percorre os dias que tem o evento 'pegarHolidias'
      if (pegarHolidias[index].style.backgroundColor === novaCor) {
        //se o dia que ta no index for a cor que está alterada
        pegarHolidias[index].style.backgroundColor = backgroundColor; // ele altera para a cor do fundo
      } else {
        pegarHolidias[index].style.backgroundColor = novaCor; // se não ele coloca a cor que eu quero alterar
      }
    }
  });
}
displayHolidays(); //coloca a função pra funcionar na pagina

//Ecercício 4:

function buttonCreate(buttonContainer, buttonName, buttonID) {
  const buttonParagrafo = document.createElement("p"); // cria o paragrafo do botão
  const button = document.createElement("button"); // cira a tag button
  button.id = buttonID; // coloca id no botão
  button.appendChild(buttonParagrafo).innerText = buttonName; // coloca o nome no botão
  buttonContainer.appendChild(button); //Coloca dentro do conteiner
}

buttonCreate(conteinerBotao, "Sexta-feira", "btn-friday") // adiciona todos os parametos para criar um botão com id
