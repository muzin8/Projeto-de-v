document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".botao");
  const abas = document.querySelectorAll(".aba-conteudo");

  if (botoes.length === 0 || abas.length === 0) return;

  const ativarAba = (index) => {
    botoes.forEach((btn) => btn.classList.remove("ativo"));
    abas.forEach((aba) => aba.classList.remove("ativo"));

    if (botoes[index]) botoes[index].classList.add("ativo");
    if (abas[index]) abas[index].classList.add("ativo");
  };
  botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => ativarAba(index));
  });

  ativarAba(0);
});
for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;