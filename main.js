document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".botao");

  if (botoes.length === 0) return;

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      botoes.forEach((btn) => btn.classList.remove("ativo"));
      botao.classList.add("ativo");
    });
  });

  botoes[0].classList.add("ativo");
});