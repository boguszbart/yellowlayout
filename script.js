// responsive navbar

const hamburger = document.getElementById('nav__hamburger');
const links = document.getElementById('nav__links');

hamburger.addEventListener('click', () => {
    links.classList.toggle('show');
});