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
// Countdown timers for each .contador element using data-target attribute
function calculaTempoParaTexto(dataAlvo) {
  const agora = new Date();
  const alvo = new Date(dataAlvo);
  const diff = alvo - agora;
  if (diff <= 0) return "Objetivo atingido";

  let segundos = Math.floor(diff / 1000);
  const dias = Math.floor(segundos / (24 * 3600));
  segundos -= dias * 24 * 3600;
  const horas = Math.floor(segundos / 3600);
  segundos -= horas * 3600;
  const minutos = Math.floor(segundos / 60);
  segundos -= minutos * 60;

  return `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

function atualizarContadores() {
  const contadores = document.querySelectorAll(".contador");
  contadores.forEach((el) => {
    const alvo = el.dataset.target;
    if (!alvo) return;
    el.textContent = calculaTempoParaTexto(alvo);
  });
}

// Atualiza imediatamente e a cada segundo
atualizarContadores();
setInterval(atualizarContadores, 1000);