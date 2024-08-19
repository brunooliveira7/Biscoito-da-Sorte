const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const btnTry = document.querySelector(".btnTry");
const btnReset = document.querySelector(".btnReset");
const msgTry = document.querySelector(".msgTry");

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

btnTry.addEventListener("click", clickImg);
btnReset.addEventListener("click", resetClick);

function clickImg() {
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  msgTry.innerText = randomPhrase;
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function resetClick() {
  toggleScreen();
}
  