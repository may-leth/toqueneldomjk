function toggleMenu(element) {
    const menu = document.getElementById("menu");
    console.log("toggleMenu se activó") // mensaje de prueba 
    menu.classList.toggle("active");
    element.classList.toggle("change");
}
