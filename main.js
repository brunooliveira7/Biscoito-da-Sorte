const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const btnLucky = document.querySelector(".btnLucky");
const btnReset = document.querySelector(".btnReset");
const msgLucky = document.querySelector(".msgLucky");

const phrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "O sucesso é a soma de pequenos esforços repetidos diariamente.",
  "A felicidade não é o destino, é a jornada.",
  "Um sorriso é a chave que abre muitas portas.",
  "A paciência é uma virtude que traz grandes recompensas.",
  "Grandes coisas estão por vir. Mantenha-se positivo.",
  "O Senhor é meu pastor, nada me faltará.",
  "O Senhor é a minha luz e a minha salvação; a quem temerei",
  "Tudo posso naquele que me fortalece.",
];

btnLucky.addEventListener("click", clickImg);
btnReset.addEventListener("click", resetClick);

function clickImg() {
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  msgLucky.innerText = randomPhrase;
  toggleScreen();
}

function resetClick() {
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
