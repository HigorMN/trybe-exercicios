let cont = 0;
const btn = document.getElementById("click");
const clickCount = document.getElementById("contador");

btn.addEventListener("click", () => {
  cont += 1;
  clickCount.innerText = cont;
});
