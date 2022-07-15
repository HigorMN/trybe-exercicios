let cont = 0;
const btn = document.getElementById("click");
const clickCount = document.getElementById("contador");

btn.addEventListener("click", function () {
  cont += 1;
  clickCount.innerText = cont;
});
