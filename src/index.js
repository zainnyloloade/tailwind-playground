const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
if (menu.classList.contains('hidden')) {
    menu.classList removeEventListener('hidden')
} else {
    menu.classList.add('hidden');
}
} )