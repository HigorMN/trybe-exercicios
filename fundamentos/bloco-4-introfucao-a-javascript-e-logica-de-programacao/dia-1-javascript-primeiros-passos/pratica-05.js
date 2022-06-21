//Operadores lógicos AND
const currentHour = 11;
let menssage = "";

if (currentHour >= 22) {
  console.log((message = "Não deveríamos comer nada, é hora de dormir"));
} else if (currentHour >= 18 && currentHour < 22) {
  console.log((mesage = "Rango da noite, vamos jantar :D"));
} else if (currentHour >= 14 && currentHour < 18) {
  console.log((mesage = "Vamos fazer um bolo pro café da tarde?"));
} else if (currentHour >= 11) {
  console.log((mesage = "Hora do almoço!!!"));
} else if (currentHour >= 4) {
  console.log((mesage = "Hmmm, cheiro de café recém passado"));
}

console.log(menssage);
