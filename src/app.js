const botonMenu = document.querySelector("#botonMenu");
const menu = document.querySelector("#menu");
const body = document.getElementById("body");

botonMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
