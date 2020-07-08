// All the HTML Elements :: 
const notificationElement = document.querySelector(".notification-text");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description");
const locationElement = document.querySelector(".city");
const countryElement = document.querySelector('.country');
const dateElement = document.querySelector('.date');
const minTempElement = document.querySelector('.min-temp-value');
const maxTempElement = document.querySelector('.max-temp-value');
const humidityElement = document.querySelector('.humidity-pc');
const windSpeedElement = document.querySelector('.wind-speed-pc');
const precipitationElement = document.querySelector('.precipitation-pc');

const weather = {
    conditions:{},
    unit:'celsius',
};

weather.temperature = {
    unit : "celsius"
}

// Get Current date and time 
var today = new Date();
var date = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();
var day = today.getDay();
const months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// Fetching user location
if (window.navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, showError);
}
function success(data) {
  let latitude = data.coords.latitude;
  let longitude = data.coords.longitude;
  notificationElement.textContent = "Location Found !";
  console.log(data.coords.latitude,data.coords.longitude);
  getWeather(latitude, longitude);
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      notificationElement.textContent =
        "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      notificationElement.textContent = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      notificationElement.textContent =
        "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.");
      notificationElement.textContent = "An unknown error occurred.";
      break;
  }
}
const KELVIN = 273.15;
function getWeather(latitude, longitude) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a55396651e6cc7e680499099e0d3b9ab`;
  // calling the api using my super reliable fetch method xD
  fetch(url)
    .then((response) => {
      try {
        return response.json();
      } catch (error) {
        console.log("Some Error occured", error);
      }
    })
    .then((data) => {
        // console.log(data);
        weather.location = data.name;
        weather.country = data.sys.country;
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.mainCondition = data.weather[0].main;
        // all temps in kelvin
        weather.temperature = data.main.temp;
        weather.feels_like = data.main.feels_like;
        weather.temp_min = data.main.temp_min;
        weather.temp_max = data.main.temp_max;
        weather.conditions.pressure = data.main.pressure;
        weather.conditions.humidity = data.main.humidity;
        // wind speed unit is meter/sec
        weather.conditions.wind_speed = data.wind.speed;
        // wind direction is in degrees
        weather.conditions.wind_speed_deg = data.wind.deg;
        
        console.log(weather);
    })
    .then(function(){
        displayWeather();
    })
}
// Changing the html dom !
function displayWeather(){
    // 1. Changing Location HTML
    locationElement.innerHTML = `<h2>${weather.location}</h2>`
    countryElement.innerHTML = `<h2>${weather.country}</h2>`
    dateElement.innerHTML = `<p>${months[month]},${date} ${days[day]}</p>`
    tempElement.textContent = `${Math.floor(weather.temperature-KELVIN)} °C`;
    
    iconElement.innerHTML = `<img src='icons/icons/${weather.iconId}.png'>`
    descElement.innerHTML = `<p>${weather.description}</p>`;
    minTempElement.innerHTML = `<p>${Math.floor(weather.temp_min-KELVIN)}°C</p>`
    maxTempElement.innerHTML = `<p>${Math.floor(weather.temp_max-KELVIN)}°C</p>`
    humidityElement.innerHTML = `<p>${weather.conditions.humidity} %</p>`
    windSpeedElement.innerHTML = `<p>${weather.conditions.wind_speed} m/s</p>`;
    precipitationElement.innerHTML = `<p>${weather.conditions.pressure} atm</p>`
}

function CtoF(temperature){
    return (temperature * 9/5) + 32;
}

tempElement.addEventListener('click',function(){
    // console.log('you clicked me');
    if(weather.unit == 'celsius'){
        let fahrenheit = CtoF(weather.temperature-KELVIN);
        fahrenheit = Math.floor(fahrenheit);  
        console.log(fahrenheit);
        weather.unit = 'fahrenheit';
        tempElement.innerHTML = `<p>${fahrenheit}<span> F</span></p>`
    }else{
        tempElement.innerHTML = `<p>${weather.temperature-KELVIN}<span> °C</span></p>`;
        weather.unit = 'celsius';
    }
})