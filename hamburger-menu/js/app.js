window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
  });

const toggleButton = document.querySelector('.toggle-menu');
const navBar = document.querySelector('.nav-bar');
const navLink  = document.querySelectorAll('.nav-link');
toggleButton.addEventListener('click',()=>{
    navBar.classList.toggle('toggle');
});
navLink.forEach(item=>{
    item.addEventListener('click',()=>{
        console.log('clicked a menu link !');
        navBar.classList.remove('toggle');
    });
});

function sendMail() {
    var link = "mailto:omkar.webdev@gmail.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('textarea').value)
    ;
    
    window.location.href = link;
}