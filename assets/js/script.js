window.onload = () => {
  const botao = document.querySelector(".menu-mobile");
  const menu = document.querySelector(".menu > nav > ul");
  botao.addEventListener("click", function() {
    menu.classList.toggle("visivel");
  });
}