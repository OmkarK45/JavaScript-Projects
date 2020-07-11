// Selecting DOM - Dark Mode Toggle 
const darkBtn = document.querySelector('.night-mode-toggle');
const navBar = document.querySelector('.title');
const darkBtnIcon = document.getElementById('darkModeIcon');
const bodyElement = document.getElementById('body');
const menuDark = document.querySelector('.nav');
darkBtn.addEventListener('click',function(){
    
    darkMode();
})
darkBtn.addEventListener('click',function(){
    if(darkBtnIcon.classList.contains('fa-moon')){
        console.log('Yes its Moon');
        darkBtnIcon.classList.remove('fa-moon');
        darkBtnIcon.classList.add('fa-sun');
    }else{
        console.log('its sun')
        darkBtnIcon.classList.add('fa-moon');
        darkBtnIcon.classList.remove('fa-sun');
    }
})
function darkMode(){
    navBar.classList.toggle('title-dark');
    bodyElement.classList.toggle('body-dark');
    menuDark.classList.toggle('show-menu-dark')
}