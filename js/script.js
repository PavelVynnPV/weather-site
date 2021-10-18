
//Date in CURRENT WEATHER
function getDate() {
    const body = document.querySelector('body');
    let data = document.querySelector('#data');
    let date = new Date();
    data.classList = ('dataInSection');
    if (date.getDate() < 10) {
        data.innerHTML = `0${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    }
        data.innerHTML = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

    if(date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) {
        body.style.cssText = 'background-image: url(img/summer.jpg)';
    }
    if(date.getMonth() === 8 || date.getMonth() === 9 || date.getMonth() === 10) {
        body.style.cssText = 'background-image: url(img/autumn.jpg)';
    }
    if(date.getMonth() === 11 || date.getMonth() === 12 || date.getMonth() === 1) {
        body.style.cssText = 'background-image: url(img/winter.jpg)';
    }
    if(date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) {
        body.style.cssText = 'background-image: url(img/spring.jpg)';
    }
}
getDate()

function currentDay(json) {
    const sunny = document.querySelector('.sunny');
    //sunny
    sunny.innerHTML = `<img src="http://openweathermap.org/img/wn/${json.weather[0].icon}.png">
        <p>${json.weather[0].main}</p>`
    //degrees
    degrees.innerHTML = `<h5 class="realFeel">${json.main.temp}&degC</h5>
                             <p class="grayP">Real Feel ${json.main.feels_like}&degC</p>`

    //InfoWeather
    let sunrise = json.sys.sunrise;
    let sunset = json.sys.sunset;
    let sunriseTime = new Date(sunrise*1000);
    let sunsetTime = new Date(sunset*1000);
    let durationSum = sunrise+sunset;
    let duration = new Date(durationSum);
    infoWeather.innerHTML = `<p class="grayP">Sunrise: ${sunriseTime.getHours()}.${sunriseTime.getMinutes()} AM</p>
                                 <p class="grayP">Sunset: ${sunsetTime.getHours()}.${sunsetTime.getMinutes()} PM</p>
                                 <p class="grayP">Duration: ${duration.getHours()}.${duration.getMinutes()} Hr</p>`
}

function currentDayTwo(json) {
    let list = json.list.slice(0, 6);
    list.forEach((item) => {
        let hourlyTime = new Date(item.dt_txt);
        infoHourly.style.display = 'flex'
        infoHourly.innerHTML += `
                            <ul class="hourly_block">
                            <li style="color: #08b4b4;">${hourlyTime.getHours()}.00</li>
                          <li class="info_weather_hourly"><img src="http://openweathermap.org/img/wn/${item.weather[0].icon}.png"></li>
                          <li class="info_weather_hourly">${item.weather[0].main}</li>
                          <li class="info_weather_hourly">${item.main.temp}&deg</li>
                          <li class="info_weather_hourly">${item.main.feels_like}&deg</li>
                            <li class="info_weather_hourly">${item.wind.speed}</li>
                            </ul>`

    })
}

function hourlyDayWeather(json) {
    const sunny = document.querySelector('.sunny');

    infoHourly.innerHTML = ``;
    //sunny
    sunny.innerHTML = `<img src="http://openweathermap.org/img/wn/${json.weather[0].icon}.png">
        <p>${json.weather[0].main}</p>`
    //degrees
    degrees.innerHTML = `<h5 class="realFeel">${json.main.temp}&degC</h5>
                             <p class="grayP">Real Feel ${json.main.feels_like}&degC</p>`

    //InfoWeather
    let sunrise = json.sys.sunrise;
    let sunset = json.sys.sunset;
    let sunriseTime = new Date(sunrise*1000);
    let sunsetTime = new Date(sunset*1000);
    let durationSum = sunrise+sunset;
    let duration = new Date(durationSum);
    infoWeather.innerHTML = `<p class="grayP">Sunrise: ${sunriseTime.getHours()}.${sunriseTime.getMinutes()} AM</p>
                                 <p class="grayP">Sunset: ${sunsetTime.getHours()}.${sunsetTime.getMinutes()} PM</p>
                                 <p class="grayP">Duration: ${duration.getHours()}.${duration.getMinutes()} Hr</p>`
}

function placesNearby(places) {
    let firstPlace = document.querySelector('.firstPlace')
    let secondPlace = document.querySelector('.secondPlace')
    let thirdPlace = document.querySelector('.thirdPlace')
    let fourthPlace = document.querySelector('.fourthPlace')
    let placesArray = places.list;
    firstPlace.innerHTML = `<ul style="display: flex; align-items: center; padding: 10px; justify-content: space-between">
                                            <li>${placesArray[0].name}</li> 
                                            <div style="display: flex; flex-direction: row;align-items: center;">      
                                                <li><img src="http://openweathermap.org/img/wn/${placesArray[0].weather[0].icon}.png"></li>
                                                <li>${placesArray[0].main.temp}</li> 
                                            </div>      
                                       </ul>`

    secondPlace.innerHTML = `<ul style="display: flex; align-items: center; padding: 10px; justify-content: space-between;">
                                            <li>${placesArray[1].name}</li>       
                                            <div style="display: flex; flex-direction: row;align-items: center;">      
                                                <li><img src="http://openweathermap.org/img/wn/${placesArray[1].weather[0].icon}.png"></li>
                                                <li>${placesArray[1].main.temp}</li> 
                                            </div>        
                                       </ul>`

    thirdPlace.innerHTML = `<ul style="display: flex; align-items: center; padding: 10px; justify-content: space-between;">
                                            <li>${placesArray[2].name}</li>       
                                            <div style="display: flex; flex-direction: row;align-items: center;">      
                                                <li><img src="http://openweathermap.org/img/wn/${placesArray[2].weather[0].icon}.png"></li>
                                                <li>${placesArray[2].main.temp}</li> 
                                            </div>        
                                       </ul>`

    fourthPlace.innerHTML = `<ul style="display: flex; align-items: center; padding: 10px; justify-content: space-between;">
                                            <li>${placesArray[3].name}</li>       
                                            <div style="display: flex; flex-direction: row;align-items: center;">      
                                                <li><img src="http://openweathermap.org/img/wn/${placesArray[3].weather[0].icon}.png"></li>
                                                <li>${placesArray[3].main.temp}</li> 
                                            </div>          
                                       </ul>`}

function placesFetch(json) {
    fetch(`http://api.openweathermap.org/data/2.5/find?lat=${json.coord.lat}&lon=${json.coord.lon}&units=metric&lang=ru&cnt=4&appid=c70869805f6f3b022c722080b19fe214`)
        .then(response => response.json())
        .then(places => {
            placesNearby(places)
        })
}

function catchErr(e) {
    if (e.response === undefined) {
        let nav = document.querySelector('nav');
        let header = document.querySelector('header');
        let firstSection = document.querySelector('.firstSection');
        let secondSection = document.querySelector('.secondSection');
        let thirdSection = document.querySelector('.thirdSection');
        let error404 = document.querySelector('.error404');
        nav.style.display = 'none';
        header.style.display = 'none';
        firstSection.style.display = 'none';
        secondSection.style.display = 'none';
        thirdSection.style.display = 'none';
        error404.style.display = 'block';
    }
}

//Info about weather firstSection - CURRENT WEATHER
const sunny = document.querySelector('.sunny');
const degrees = document.querySelector('.degrees');
const infoWeather = document.querySelector('.infoWeather');
const searchCityBtn = document.querySelector('#searchCity');
const search = document.querySelector('#search');
const error = document.querySelector('.error');
const infoHourly = document.querySelector('.infoHourly');
const myKey = 'c70869805f6f3b022c722080b19fe214';


//GEOLOCATION
window.onload = function() {
    let startPos;
    let geoOptions = {
        enableHighAccuracy: true
    }

    let geoSuccess = function(position) {
        startPos = position;
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${startPos.coords.latitude}&lon=${startPos.coords.longitude}&units=metric&appid=${myKey}`)
            .then(response => response.json())
            .then(json => {
                currentDay(json)
            });

        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${startPos.coords.latitude}&lon=${startPos.coords.longitude}&units=metric&lang=ru&appid=${myKey}`)
            .then(response => response.json())
            .then(json => {
                currentDayTwo(json)
            });

        fetch(`http://api.openweathermap.org/data/2.5/find?lat=${startPos.coords.latitude}&lon=${startPos.coords.longitude}&units=metric&lang=ru&cnt=4&appid=c70869805f6f3b022c722080b19fe214`)
            .then(response => response.json())
            .then(json => {
                placesNearby(json)
            })

    };
    let geoError = function(error) {
        console.log('Error occurred. Error code: ' + error.code);
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
};


searchCityBtn.addEventListener('click', ()=> {

    let searchValue = search.value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${myKey}`;

    fetch(url)
        .then(response => response.json())
        .then(json => {
            hourlyDayWeather(json)
            placesFetch(json)
        })



    //Hourly WEATHER

    let hourlyUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=metric&lang=ru&appid=${myKey}`;
    fetch(hourlyUrl)
        .then(response => response.json())
        .then(json => {
            currentDayTwo(json)
        })
        .catch( (e) => {
            catchErr(e)
        })
})


