const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {

    const menuHamburguer = document.getElementById("menuHamburguer");
    const menuMobile = document.getElementById("menuMobile");
    const menuOverlay = document.getElementById("menuOverlay");
    const closeMenu = document.getElementById("closeMenu");

    if (!menuHamburguer) return;

    menuHamburguer.addEventListener("click", () => {
        menuMobile.classList.add("active");
        menuOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    function fecharMenu() {
        menuMobile.classList.remove("active");
        menuOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    closeMenu.addEventListener("click", fecharMenu);
    menuOverlay.addEventListener("click", fecharMenu);

});