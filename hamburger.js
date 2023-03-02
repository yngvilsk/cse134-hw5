let hamburgerButton = document.getElementById("hamburger-button");
let hamburgerMenu = document.querySelector(".hamburger-menu");

/* Toggle hamburger menu visibility when hamburger button is clicked */
hamburgerButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    // if is-active is set remove it, otherwise add it
    hamburgerMenu.classList.toggle("is-active");
}