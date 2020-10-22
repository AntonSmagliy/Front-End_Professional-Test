let overlay = document.getElementById('overlay');
let menuList = document.querySelector('.menu-list')
let body = document.body;

function toggleBurgerMenu(){
    overlay.classList.toggle('dbp');
    menuList.classList.toggle('dbp');
    body.classList.toggle('ovhid');
}