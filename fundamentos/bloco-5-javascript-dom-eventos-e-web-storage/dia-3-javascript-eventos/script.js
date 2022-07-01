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
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
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
