const button = document.getElementById("button-enviar");
const nome = document.getElementById("nome");
function getName(event) {
  event.preventDefault();
  console.log(nome.value);
}
button.addEventListener('click', getName);
