// Selecting DOM - Dark Mode Toggle 
const containerDark  = document.querySelector('.container');
const darkBtn = document.querySelector('.night-mode-toggle');
const navBar = document.querySelector('.title');
const darkBtnIcon = document.getElementById('darkModeIcon');
const bodyElement = document.getElementById('body');
const menuDark = document.querySelector('.nav');
const humidityElementDark = document.querySelector('.humidity');
const windSpeedElementDark = document.querySelector('.wind-speed');
const precipitationElementDark = document.querySelector('.precipitation');
const locationDark = document.querySelector('.location');
const dateDark = document.querySelector('.date');
// Calling Dark Mode When Clicked 
const weatherTextDark = document.querySelector('.weather-conditions-indicator')
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
    menuDark.classList.toggle('show-menu-dark');
    humidityElementDark.classList.toggle('wind-speed-dark');
    precipitationElementDark.classList.toggle('wind-speed-dark');
    containerDark.classList.toggle('container-dark');
    windSpeedElementDark.classList.toggle('wind-speed-dark');
    locationDark.classList.toggle('location-dark');
    weatherTextDark.classList.toggle('weather-conditions-text-dark');
    dateDark.classList.toggle('date-dark');
}