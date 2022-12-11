////////// navbar
const nav = document.querySelector('nav');
const navModifier = document.querySelector('navModifier');

window.addEventListener('scroll', modifyNavbar);

function modifyNavbar(){
    nav.classList.toggle('navModifier', window.scrollY>0);
}


////////// Dropdown
const dropdown = document.querySelector('.dropdown');
const arrowDown = document.querySelector('.arrowDown');
const arrowUp = document.querySelector('.arrowUp');
const borderModifier = document.querySelector('.borderModifier');
const dropdown__menu = document.querySelector('.dropdown__menu');
const show = document.querySelector('.show');
const hide = document.querySelector('.hide');

dropdown.addEventListener('click', dropdownToggle);

function dropdownToggle(){
    dropdown.classList.toggle('borderModifier')
    arrowDown.classList.toggle('hide')
    arrowUp.classList.toggle('show')
    dropdown__menu.classList.toggle('show')
    
}