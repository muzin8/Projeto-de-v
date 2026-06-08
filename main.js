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