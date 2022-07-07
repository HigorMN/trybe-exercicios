function buttoncreate() {
  const forms = document.getElementById("forms");
  const creatDiv = document.createElement("div");
  const creatButton = document.createElement("button");
  creatButton.innerText = "Enviar";
  forms.appendChild(creatDiv);
  creatDiv.appendChild(creatButton);
}

buttoncreate();
