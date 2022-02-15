const menuToggle = document.querySelector('.menuToggleButton');
const menuToggleClose = document.querySelector('.menuToggleButtonClose');
const mobileMenu = document.querySelector('#mobileMenu')

menuToggle.addEventListener("click", openMenu);
menuToggleClose.addEventListener("click", closeMenu);

function openMenu() {
    mobileMenu.classList.remove("mobileNavbarBgClose");
    mobileMenu.classList.toggle("mobileNavbarBgOpen");
    menuToggle.classList.toggle("appear");
    menuToggleClose.classList.remove("appear")
}

function closeMenu() {
    mobileMenu.classList.remove("mobileNavbarBgOpen")
    mobileMenu.classList.toggle("mobileNavbarBgClose");
    menuToggleClose.classList.add("appear")
    menuToggle.classList.remove("appear")
}