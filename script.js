const botao = document.getElementById("menuBotao");
const menu = document.getElementById("menu");

botao.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  botao.setAttribute("aria-expanded", String(aberto));
  botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  botao.textContent = aberto ? "×" : "☰";
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    botao.setAttribute("aria-expanded", "false");
    botao.setAttribute("aria-label", "Abrir menu");
    botao.textContent = "☰";
  });
});
