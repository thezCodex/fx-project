const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navLink = document.querySelector('.nav-link')


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navLink.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navLink.classList.remove('open');
}