const notificationElement = document.querySelector(".notification-text");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value");
const descElement = document.querySelector(".temperature-description");
const locationElement = document.querySelector(".city");

const weather = {
    conditions:{},
};

weather.temperature = {
    unit : "celsius"
}

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
  // const api_key  = 'a55396651e6cc7e680499099e0d3b9ab';
  //   API call function::
  
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
    
    
    
    tempElement.innerHTML = `<p>${weather.temperature-KELVIN}<span> °C</span></p>`;
}
