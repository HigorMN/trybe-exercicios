const button = document.getElementById("button-enviar");
const nome = document.getElementById("nome");
const limpe = document.getElementById("limp-btn");
const email = document.getElementById("email");
const texto = document.getElementById("texto");
const radio = document.getElementsByClassName("radio")
function getName(event) {
//   event.preventDefault();
  console.log(nome.value);
}
button.addEventListener("click", getName);

limpe.addEventListener("click", function limpar(event) {
  event.preventDefault();
  nome.value = "";
  email.value = "";
  texto.value = "";
});

function radioRemove() {
    for (let index = 0; index < radio.length; index += 1) {
        radio[index].value = '';
    }
}

radioRemove();
