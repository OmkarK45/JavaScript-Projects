const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Dark Mode Function
function darkMode() {
  nav.style.backgroundColor = "rgb(0,0,0,0.5)";
  textBox.style.backgroundColor = "rgb(255,255,255,0.5)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.remove("fa-sun");
  toggleIcon.children[1].classList.add("fa-moon");
  image1.src = "src/img/undraw_feeling_proud_dark.svg";
  image2.src = "src/img/undraw_feeling_proud_dark.svg";
  image3.src = "src/img/undraw_feeling_proud_dark.svg";
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = "rgb(255,255,255,0.5)";
  textBox.style.backgroundColor = "rgb(0,0,0,0.5)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.remove("fa-moon");
  toggleIcon.children[1].classList.add("fa-sun");
  image1.src = "src/img/undraw_feeling_proud_light.svg";
  image2.src = "src/img/undraw_feeling_proud_light.svg";
  image3.src = "src/img/undraw_feeling_proud_light.svg";
}

// Function
function switchTheme(event) {
  console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem('theme','dark')
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem('theme','light')
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check local storage for theme 
const currentTheme = localStorage.getItem('theme');
console.log(currentTheme);
