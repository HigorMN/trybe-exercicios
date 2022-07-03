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

//Exercício 4:

function buttonCreate(buttonContainer, buttonName, buttonID) {
  const buttonParagrafo = document.createElement("p"); // cria o paragrafo do botão
  const button = document.createElement("button"); // cira a tag button
  button.id = buttonID; // coloca id no botão
  button.appendChild(buttonParagrafo).innerText = buttonName; // coloca o nome no botão
  buttonContainer.appendChild(button); //Coloca como filho do conteiner
}

buttonCreate(conteinerBotao, "Sexta-feira", "btn-friday"); // adiciona todos os parametos para criar um botão com id

//Exercício 5:
function fridayDay(dias) {
  let buttonFryday = document.querySelector("#btn-friday"); // Captura o Botão
  let dayFriday = document.querySelectorAll(".friday"); // Captura todos as classes que tem a tag
  let fridaySim = "SEXTOU 🎉";
  buttonFryday.addEventListener("click", function () {
    for (let index = 0; index < dayFriday.length; index += 1) {
      if (dayFriday[index].innerText === fridaySim) {
        dayFriday[index].innerText = dias[index];
      } else {
        dayFriday[index].innerText = fridaySim;
      }
    }
  });
}
let sextas = [4, 11, 18, 25];
fridayDay(sextas);

//Exercício 6:

function daysZoom() {
  let days = document.querySelectorAll(".day");
  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener("mouseover", () => font("30px", event));
    days[index].addEventListener("mouseout", () => font("20px", event));
  }
}

function font(tamanho, event) {
  event.target.style.fontSize = tamanho;
}

daysZoom();

// Exercício 7:

function criadorDeSpan(cozinhar) {
  let tarefas = document.querySelector(".my-tasks");
  let createSpan = document.createElement("span");

  createSpan.innerText = cozinhar;
  tarefas.appendChild(createSpan);
}

criadorDeSpan("oi");

// Exercício 8:

function adicioneUmaDiv(cor) {
  let tarefas = document.querySelector(".my-tasks");
  let createDiv = document.createElement("div");
  createDiv.className = "task";
  createDiv.style.backgroundColor = cor;
  tarefas.appendChild(createDiv);
}

adicioneUmaDiv("blue");

// Exercício 9:

function selecioneTarefa() {
  let selecionarTask = document.getElementsByClassName("task selected");
  let asTasks = document.querySelector(".task");

  asTasks.addEventListener("click", function (event) {
    if (selecionarTask.length === 0) {
      event.target.className = "task selected";
    } else {
      event.target.className = "task";
    }
  });
}

selecioneTarefa();

// Exercício 10:

function diaCor() {
  let selecionarTask = document.getElementsByClassName("task selected"); // Retorna um array com todos os elementos com a classe "task selected"
  let dias = document.querySelector("#days"); // Seleciona a primeira ul com id "days"
  let taskDiv = document.querySelector(".task"); // Seleciona o primeiro elemento com a classe "task"
  let colorTask = taskDiv.style.backgroundColor; // Salva o Background Color da classe task na variável "colorTask"

  // Para pegar o evento alvo, precisamos declarar o evento como parâmetro da função
  dias.addEventListener("click", function (event) {
    let corDoEvendo = event.target.style.color;
    // Caso não houver nenhum elemento com a classe "task selected" E o evento alvo não tiver a mesma cor de fundo da variável "colorTask"
    if (selecionarTask.length > 0 && corDoEvendo !== colorTask) {
      let color = selecionarTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "elecionarTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
      // Caso a cor do evento alvo seja igual à da variável "colorTask"
    } else if (corDoEvendo === colorTask) {
      event.target.style.color = "rgb(119,119,119)"; // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
}

diaCor();

function addNewTask() {
  let getInputField = document.querySelector("#task-input"); // seleciona o input que tem o id "task-input"
  let addInputButton = document.querySelector("#btn-add"); // seleciona o botão de adicionar que tem o id "btn-add"
  let getTaskList = document.querySelector(".task-list"); // seleciona uma ul lista não ordenada
  // função ao clicar no botão adicionar
  addInputButton.addEventListener("click", function () {
    // se o input tiver o valor maior que 0
    if (getInputField.value.length > 0) {
      let newLi = document.createElement("li"); //cria uma li
      newLi.innerText = getInputField.value; //adiciona a li o valor que ta no input

      getTaskList.appendChild(newLi); // coloca como filho da lista não ordenada
      getInputField.value = ""; // o valor é igual a uma string se não não funciona a lista
      // se não tiver nada ele abre uma caixa de alerta com erro
    } else {
      alert("Error: Digite ao menos 1 caractere.");
    }
  });

  // função pra adicionar um evento no enter
  getInputField.addEventListener("keyup", function (event) {
    // caso a tecla seja igual ao ENTER e o valor do da caixa for maior que 0
    if (event.key === "Enter" && getInputField.value.length > 0) {
      let newLi = document.createElement("li"); // cria uma li
      newLi.innerText = getInputField.value; // coloca o que ta no input e armazena na li

      getTaskList.appendChild(newLi); // cria um filho li pra a ul
      getInputField.value = ""; // e o valor é igual a uma string
    }
  });
}

addNewTask();
