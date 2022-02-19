const btn1 = document.getElementById("btn01");
const btn2 = document.getElementById("btn02");
const setaBruto = document.getElementById("setaBruto");
const setaLiquido = document.getElementById("setaLiquido");

btn1.addEventListener("click", function () {
  btn1.style.background = "#FF8631";
  btn2.style.background = "transparent";
  btn1.style.color = "#ffff";
  btn2.style.color = "black";
  setaBruto.style.color = "#ffff";
  setaLiquido.style.color = "transparent";
});
btn2.addEventListener("click", function () {
  btn1.style.background = "transparent";
  btn2.style.background = "#FF8631";
  btn1.style.color = "black";
  btn2.style.color = "#ffff";
  setaBruto.style.color = "transparent";
  setaLiquido.style.color = "#ffff";
});

const btn3 = document.getElementById("btn03");
const btn4 = document.getElementById("btn04");
const btn5 = document.getElementById("btn05");
const setaPre = document.getElementById("setaPre");
const setaPos = document.getElementById("setaPos");

btn3.addEventListener("click", function () {
  btn3.style.background = "#FF8631";
  btn4.style.background = "transparent";
  btn5.style.background = "transparent";
  btn3.style.color = "#ffff";
  btn4.style.color = "black";
  btn5.style.color = "black";
  setaPre.style.color = "#ffff";
  setaPos.style.color = "transparent";
});
btn4.addEventListener("click", function () {
  btn4.style.background = "#FF8631";
  btn3.style.background = "transparent";
  btn5.style.background = "transparent";
  btn4.style.color = "#ffff";
  btn3.style.color = "black";
  btn5.style.color = "black";
  setaPre.style.color = "transparent";
  setaPos.style.color = "#ffff";
});
btn5.addEventListener("click", function () {
  btn5.style.background = "#FF8631";
  btn3.style.background = "transparent";
  btn4.style.background = "transparent";
  btn5.style.color = "#ffff";
  btn3.style.color = "black";
  btn4.style.color = "black";
  setaPre.style.color = "transparent";
  setaPos.style.color = "transparent";
});
