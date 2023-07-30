const POPUP = document.querySelector(".popup__registration");
const CLOSEPOPUP = document.querySelector(".popup__registration-close");
const REGISTER = document.querySelector(".logging__container-register");
const OVERLAY = document.querySelector(".overlay");
const TRIGGER = document.querySelector(".mobile__menu-trigger");
const MENU = document.querySelector(".mobile__menu");

REGISTER.onclick = function(event) {
    openPopup();
};

CLOSEPOPUP.onclick = function(event) {
    closePopup();
};
TRIGGER.onclick = function(event) {
    toggleMenu();
};
function toggleMenu() {
    MENU.classList.toggle("mobile__menu-show");
}

function openPopup() {
    POPUP.classList.add("popup__registration-show");
    OVERLAY.classList.add("popup__registration-show");
}

function closePopup() {
    POPUP.classList.remove("popup__registration-show");
    OVERLAY.classList.remove("popup__registration-show");
}