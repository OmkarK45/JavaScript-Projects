const notificationElement = document.querySelector('.notificaion');
const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');
const locationElement = document.querySelector('.city');
// Fetching user location
if (window.navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, showError);
} 
function success(data){
    var lon = Math.floor(data.coords.latitude);
    var lat = Math.floor(data.coords.longitude);
    // const api_key  = 'a55396651e6cc7e680499099e0d3b9ab';
//   API call function::
    const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a55396651e6cc7e680499099e0d3b9ab`;
    // calling the api using my super reliable fetch method xD
    fetch(url)
    .then(response=>{
        try{
            return response.json()
        }
        catch(error){
            console.log('Some Error occured',error)
        }
    })
    .then(data=>{
        console.log(data);
    })
}


function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.")
        break;
      case error.TIMEOUT:
       console.log("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
       console.log("An unknown error occurred.")
        break;
    }
  }





