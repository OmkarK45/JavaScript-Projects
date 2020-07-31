const countryNameElement = document.querySelector('.countryName');
const countryImageElement = document.querySelector('.countryFlag');

// 1. Do a fetch request
const url = 'https://restcountries.eu/rest/v2/all';

fetch(url)
    .then(response =>{
        return response.json();
    })

    .then(data=>{
        let countryName;
        let countryFlag;
        countryName = data[104].name;
        countryFlag = data[104].flag;
        countryImageElement.setAttribute('src',`${countryFlag}`);
        console.log(countryFlag);
        console.log(countryName);
        countryNameElement.textContent = `${countryName}`;
    })