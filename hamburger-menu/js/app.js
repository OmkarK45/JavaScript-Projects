const toggleButton = document.querySelector('.toggle-menu');
const navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click',()=>{
    navBar.classList.toggle('toggle');
})