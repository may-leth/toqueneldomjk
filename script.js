//Funcion para desplegar menu
function toggleMenu(element) {
  const menu = document.getElementById("menu");
  console.log("toggleMenu se activó"); // mensaje de prueba
  menu.classList.toggle("active");
  element.classList.toggle("change");
}
// cierra el menú cuando haces click en un enlace del menú
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("active");
    document.querySelector(".lineas-menu").classList.remove("change");
  });
});
// funcion para scroll up btn
const btn = document.querySelector(".scroll-up-btn");

btn.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
