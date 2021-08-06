const mainMenu = document.querySelector(".main_menu");
const closeMenu = document.querySelector(".cross");
const openMenu = document.querySelector(".burger");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
  console.log("123");
}
function close() {
  mainMenu.style.top = "-100%";
}
