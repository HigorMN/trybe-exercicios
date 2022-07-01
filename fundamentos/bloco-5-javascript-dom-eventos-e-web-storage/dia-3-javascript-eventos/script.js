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
  ];
  const diaList = document.getElementById("days");

  for (let diasList = 0; diasList < decemberDaysList.length; diasList += 1) {
    let days31 = decemberDaysList[diasList];
    let dias = document.createElement("li");
    dias.innerText = days31;
    dias.className = "day";
    if (days31 === 24 || days31 === 25 || days31 === 31) {
      dias.classList.add("holiday");
    }

    if (days31 === 4 || days31 === 11 || days31 === 18 || days31 === 25) {
      dias.classList.add("friday");
    }
    diaList.appendChild(dias);
  }
}

decemberDays();

//  Exercício 2:

function feriados() {
  const holidayClick = document.getElementsByClassName("holiday");
  const conteinerBotao = document.querySelector(".buttons-container");
  const paragrafoFeriados = document.createElement("p");
  const botao = document.createElement("button");
  botao.id = "btn-holiday";
  botao.appendChild(paragrafoFeriados).innerText = "Feriado";
  conteinerBotao.appendChild(botao);
}

feriados();

//Ecercício 3:

function displayHolidays() {
  //pega o botão
    let pegarHoliButton = document.querySelector('#btn-holiday');
  //pega os dias de evento
    let pegarHolidias = document.querySelectorAll('.holiday')
    // armazena a cor de fundo
    let backgroundColor = 'rgb(238,238,238)';
    // a cor que vai mudar
    let novaCor = 'white';
  // ao clicar
    pegarHoliButton.addEventListener('click', function() {
      //index percorre os dias que tem o evento
      for (let index = 0; index < pegarHolidias.length; index += 1) {
        //se o dia que ta no index for a cor que está alterada
        if (pegarHolidias[index].style.backgroundColor === novaCor) {
          //ele altera para a cor do fundo
          pegarHolidias[index].style.backgroundColor = backgroundColor;
          // se não ele coloca a cor que eu quero alterar
        } else {
          pegarHolidias[index].style.backgroundColor = novaCor;
        }
      }
    });
  }
  displayHolidays();
