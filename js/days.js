function currentWeather(json) {

    let currentDailyIcon = document.querySelector('.show-current-icon');
    let currentDailyTemp = document.querySelector('.show-current-temp');
    let currentDailyDesc = document.querySelector('.show-current-desc');
    let currentDailyDay = document.querySelector('.show-current-day');

    currentDailyDay.innerHTML = `Today`;
    currentDailyIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${json.weather[0].icon}.png">`
    currentDailyTemp.innerHTML = `${json.main.temp}&degC`
    currentDailyDesc.innerHTML = `${json.weather[0].description}`

}

function secondWeather(json) {

    const showIcon = document.querySelector('.show-icon');
    const showSecondIcon = document.querySelector('.show-second-icon');
    const showThirdIcon = document.querySelector('.show-third-icon');
    const showFourthIcon = document.querySelector('.show-fourth-icon');

    const showTemp = document.querySelector('.show-temp');
    const showSecondTemp = document.querySelector('.show-second-temp');
    const showThirdTemp = document.querySelector('.show-third-temp');
    const showFourthTemp = document.querySelector('.show-fourth-temp');

    const showDesc = document.querySelector('.show-desc');
    const showSecondDesc = document.querySelector('.show-second-desc');
    const showThirdDesc = document.querySelector('.show-third-desc');
    const showFourthDesc = document.querySelector('.show-fourth-desc');

    let now = new Date();
    let h = now.getHours();
    let num = 8-(Math.floor(h/3));
//Завтра
    showIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${json.list[num+3].weather[0].icon}.png">`;
    showTemp.innerHTML = `${json.list[num+3].main["temp"]}&degC`;
    showDesc.innerHTML = `${json.list[num+3].weather[0]["description"]}`;
//После-завтра
    showSecondIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${json.list[num+11].weather[0].icon}.png">`;
    showSecondTemp.innerHTML = `${json.list[num+11].main["temp"]}&degC`;
    showSecondDesc.innerHTML = `${json.list[num+11].weather[0]["description"]}`;
//После-после-завтра
    showThirdIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${json.list[num+17].weather[0].icon}.png">`;
    showThirdTemp.innerHTML = `${json.list[num+17].main["temp"]}&degC`;
    showThirdDesc.innerHTML = `${json.list[num+17].weather[0]["description"]}`;
//На четвертый день
    showFourthIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${json.list[num+27].weather[0].icon}.png">`;
    showFourthTemp.innerHTML = `${json.list[num+27].main["temp"]}&degC`;
    showFourthDesc.innerHTML = `${json.list[num+27].weather[0]["description"]}`;
}

function showDateTime() {
    const showDay = document.querySelector('.show-day');
    const showSecondDay = document.querySelector('.show-second-day');
    const showThirdDay = document.querySelector('.show-third-day');
    const showFourthDay = document.querySelector('.show-fourth-day');

    let d = new Date();
    let n1, n2, n3, n4;
    let weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    if(d.getDay() >= 3){
        n1 = weekday[(d.getDay()+1)];
        n2 = weekday[(d.getDay()+2)];
        n3 = weekday[(d.getDay()+3)];
        n4 = weekday[7-(d.getDay()+4)];} if(d.getDay() >= 4)
    {
        n1 = weekday[(d.getDay()+1)];
        n2 = weekday[(d.getDay()+2)];
        n3 = weekday[7-(d.getDay()+3)];
        n4 = weekday[9-(d.getDay()+4)];} if(d.getDay() >= 5)
    {
        n1 = weekday[(d.getDay()+1)];
        n2 = weekday[7-(d.getDay()+2)];
        n3 = weekday[9-(d.getDay()+3)];
        n4 = weekday[11-(d.getDay()+4)];} if(d.getDay() >= 6)
    {
        n1 = weekday[7-(d.getDay()+1)];
        n2 = weekday[9-(d.getDay()+2)];
        n3 = weekday[11-(d.getDay()+3)];
        n4 = weekday[13-(d.getDay()+4)];}  if(d.getDay() < 3)
    {
        n1 = weekday[(d.getDay()+1)];
        n2 = weekday[(d.getDay()+2)];
        n3 = weekday[(d.getDay()+3)];
        n4 = weekday[(d.getDay()+4)];

    }
    showDay.innerHTML = `${n1}`;
    showSecondDay.innerHTML = `${n2}`;
    showThirdDay.innerHTML = `${n3}`;
    showFourthDay.innerHTML = `${n4}`;
}

function showMonths() {
    const showMonth = document.querySelectorAll('.month-span');

    showMonth.forEach((item)=> {
        let date = new Date()
        let numMonth = new Array(12);
        numMonth[0] = "Dec";
        numMonth[1] = "Jan";
        numMonth[2] = "Feb";
        numMonth[3] = "Mar";
        numMonth[4] = "Apr";
        numMonth[5] = "May";
        numMonth[6] = "Jun";
        numMonth[7] = "Jul";
        numMonth[8] = "Aug";
        numMonth[9] = "Sep";
        numMonth[10] = "Oct";
        numMonth[11] = "Nov";
        if(date.getMonth() === 0) {
            item.innerHTML = `<li>${numMonth[1]}</li>`
        }
        if(date.getMonth() === 1) {
            item.innerHTML = `<li>${numMonth[2]}</li>`
        }
        if(date.getMonth() === 2) {
            item.innerHTML = `<li>${numMonth[3]}</li>`
        }
        if(date.getMonth() === 3) {
            item.innerHTML = `<li>${numMonth[4]}</li>`
        }
        if(date.getMonth() === 4) {
            item.innerHTML = `<li>${numMonth[5]}</li>`
        }
        if(date.getMonth() === 5) {
            item.innerHTML = `<li>${numMonth[6]}</li>`
        }
        if(date.getMonth() === 6) {
            item.innerHTML = `<li>${numMonth[7]}</li>`
        }
        if(date.getMonth() === 7) {
            item.innerHTML = `<li>${numMonth[8]}</li>`
        }
        if(date.getMonth() === 8) {
            item.innerHTML = `<li>${numMonth[9]}</li>`
        }
        if(date.getMonth() === 9) {
            item.innerHTML = `<li>${numMonth[10]}</li>`
        }
        if(date.getMonth() === 10) {
            item.innerHTML = `<li>${numMonth[11]}</li>`
        }
        if(date.getMonth() === 11) {
            item.innerHTML = `<li>${numMonth[0]}</li>`
        }
    })
}

function showDate(json) {
    const showDateCurrent = document.querySelector('.date-span');
    const showDateFirst = document.querySelector('.date-span-first');
    const showDateSecond = document.querySelector('.date-span-second');
    const showDateThird = document.querySelector('.date-span-third');
    const showDateFourth = document.querySelector('.date-span-fourth');

    let now = new Date();
    let h = now.getHours();
    let num = 8-(Math.floor(h/3));
    let date = new Date()
    showDateCurrent.innerHTML = `${date.getDate()}`

    let dateFirst = new Date(json.list[num+3].dt_txt);
    let dateSecond = new Date(json.list[num+11].dt_txt);
    let dateThird = new Date(json.list[num+17].dt_txt);
    let dateFourth = new Date(json.list[num+27].dt_txt);

    showDateFirst.innerHTML = `${dateFirst.getDate()}`;
    showDateSecond.innerHTML = `${dateSecond.getDate()}`;
    showDateThird.innerHTML = `${dateThird.getDate()}`;
    showDateFourth.innerHTML = `${dateFourth.getDate()}`;

}

function thirdWeather(json) {
    const showDay = document.querySelector('.show-day');
    const showSecondDay = document.querySelector('.show-second-day');
    const showThirdDay = document.querySelector('.show-third-day');
    const showFourthDay = document.querySelector('.show-fourth-day');
    const currentDailyDay = document.querySelector('.show-current-day');
    const infoHourly = document.querySelector('.infoHourly');
    const fourDailyBlock = document.querySelectorAll('.fourDaily-block');
    const currentHourly = document.querySelector('.currentHourly');
    const firstHourly = document.querySelector('.firstHourly');
    const secondHourly = document.querySelector('.secondHourly');
    const thirdHourly = document.querySelector('.thirdHourly');
    const fourthHourly = document.querySelector('.fourthHourly');
    const hourlyDay = document.querySelector('.hourlyDay');
    let dailyCurrentHourly = json.list.slice(0,6);
    let dailyHoursFirst = json.list.slice(6,12);
    let dailyHoursSecond = json.list.slice(14,20);
    let dailyHoursThird = json.list.slice(22,28);
    let dailyHoursFourth = json.list.slice(30,36);

    fourDailyBlock.forEach((el)=> {
        let currentDay = document.querySelector('.current-daily-block');
        el.addEventListener('click', () => {

            if (el === currentDay) {
                hourlyDay.innerHTML = `${currentDailyDay.innerText}`
            } else {
            }

            if (el === firstHourly) {
                hourlyDay.innerHTML = `${showDay.innerText}`
            } else {
            }

            if (el === secondHourly) {
                hourlyDay.innerHTML = `${showSecondDay.innerText}`
            } else {
            }

            if (el === thirdHourly) {
                hourlyDay.innerHTML = `${showThirdDay.innerText}`
            } else {
            }

            if (el === fourthHourly) {
                hourlyDay.innerHTML = `${showFourthDay.innerText}`
            } else {
            }

            infoHourly.innerHTML = ``;


                dailyCurrentHourly.forEach((info) => {
                    if (el === currentHourly) {
                        let hourlyTime = new Date(info.dt_txt);
                        infoHourly.style.display = 'flex';
                        infoHourly.innerHTML += `
                            <ul class="hourly_block">
                            <li class="color-time">${hourlyTime.getHours()}.00</li>
                          <li class="info_weather_hourly"><img src="http://openweathermap.org/img/wn/${info.weather[0].icon}.png"></li>
                          <li class="info_weather_hourly">${info.weather[0].main}</li>
                          <li class="info_weather_hourly">${info.main.temp}&deg</li>
                          <li class="info_weather_hourly">${info.main.feels_like}&deg</li>
                            <li class="info_weather_hourly black-speed">${info.wind.speed}</li>
                            </ul>`
                    } else {
                    }
                })

                dailyHoursFirst.forEach((info) => {
                if (el === firstHourly) {
                    let hourlyTime = new Date(info.dt_txt);
                    infoHourly.style.display = 'flex';
                    infoHourly.innerHTML += `
                            <ul class="hourly_block">
                            <li>${hourlyTime.getHours()}.00</li>
                          <li class="info_weather_hourly"><img src="http://openweathermap.org/img/wn/${info.weather[0].icon}.png"></li>
                          <li class="info_weather_hourly">${info.weather[0].main}</li>
                          <li class="info_weather_hourly">${info.main.temp}&deg</li>
                          <li class="info_weather_hourly">${info.main.feels_like}&deg</li>
                            <li class="info_weather_hourly">${info.wind.speed}</li>
                            </ul>`
                } else {
                }
            })

            dailyHoursSecond.forEach((info) => {
                if (el === secondHourly) {
                    let hourlyTime = new Date(info.dt_txt);
                    infoHourly.style.display = 'flex';
                    infoHourly.innerHTML += `
                            <ul class="hourly_block">
                            <li>${hourlyTime.getHours()}.00</li>
                          <li class="info_weather_hourly"><img src="http://openweathermap.org/img/wn/${info.weather[0].icon}.png"></li>
                          <li class="info_weather_hourly">${info.weather[0].main}</li>
                          <li class="info_weather_hourly">${info.main.temp}&deg</li>
                          <li class="info_weather_hourly">${info.main.feels_like}&deg</li>
                            <li class="info_weather_hourly">${info.wind.speed}</li>
                            </ul>`
                } else {
                }
            })

            dailyHoursThird.forEach((info) => {
                if (el === thirdHourly) {
                    let hourlyTime = new Date(info.dt_txt);
                    infoHourly.style.display = 'flex';
                    infoHourly.innerHTML += `
                            <ul class="hourly_block">
                            <li>${hourlyTime.getHours()}.00</li>
                          <li class="info_weather_hourly"><img src="http://openweathermap.org/img/wn/${info.weather[0].icon}.png"></li>
                          <li class="info_weather_hourly">${info.weather[0].main}</li>
                          <li class="info_weather_hourly">${info.main.temp}&deg</li>
                          <li class="info_weather_hourly">${info.main.feels_like}&deg</li>
                            <li class="info_weather_hourly">${info.wind.speed}</li>
                            </ul>`
                } else {
                }
            })

            dailyHoursFourth.forEach((info) => {
                if (el === fourthHourly) {
                    let hourlyTime = new Date(info.dt_txt);
                    infoHourly.style.cssText = 'display:flex;';
                    infoHourly.innerHTML += `
                            <ul class="hourly_block">
                            <li>${hourlyTime.getHours()}.00</li>
                          <li class="info_weather_hourly"><img src="http://openweathermap.org/img/wn/${info.weather[0].icon}.png"></li>
                          <li class="info_weather_hourly">${info.weather[0].main}</li>
                          <li class="info_weather_hourly">${info.main.temp}&deg</li>
                          <li class="info_weather_hourly">${info.main.feels_like}&deg</li>
                            <li class="info_weather_hourly">${info.wind.speed}</li>
                            </ul>`
                } else {
                }
            })
        })
    })
}

function setImageBody() {

    const body = document.querySelector('body');
    let date = new Date();
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
setImageBody()

function catchErr(e) {
    if (e.response === undefined) {
        let nav = document.querySelector('nav');
        let header = document.querySelector('header');
        let firstSection = document.querySelector('.firstSection');
        let secondSection = document.querySelector('.secondSection');
        let error404 = document.querySelector('.error404');
        nav.style.display = 'none';
        header.style.display = 'none';
        firstSection.style.display = 'none';
        secondSection.style.display = 'none';
        error404.style.display = 'block';
    }
}

const infoHourly = document.querySelector('.infoHourly');

window.onload = function() {
    let startPos;
    let geoOptions = {
        enableHighAccuracy: true
    }

    let geoSuccess = function (position) {
        startPos = position;
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${startPos.coords.latitude}&lon=${startPos.coords.longitude}&units=metric&appid=c70869805f6f3b022c722080b19fe214`)
            .then(response => response.json())
            .then(json => {
                currentWeather(json)
            })


        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${startPos.coords.latitude}&lon=${startPos.coords.longitude}&units=metric&appid=c70869805f6f3b022c722080b19fe214`)
            .then(response => response.json())
            .then(json => {
                secondWeather(json)
                showDateTime(json)
                showMonths(json)
                showDate(json)
                thirdWeather(json)
            })

        let searchCityBtn = document.querySelector('#searchCity');
        let search = document.querySelector('#search');

        searchCityBtn.addEventListener('click', ()=> {
            infoHourly.innerHTML = ``;
            let searchValue = search.value;
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=c70869805f6f3b022c722080b19fe214`)
                .then(response => response.json())
                .then(json => {
                    currentWeather(json)
                })
        })

        searchCityBtn.addEventListener('click', ()=> {
            infoHourly.innerHTML = ``;
            let searchValue = search.value;
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=metric&appid=c70869805f6f3b022c722080b19fe214`)
                .then(response => response.json())
                .then(json => {
                    secondWeather(json)
                    showDateTime(json)
                    showMonths(json)
                    showDate(json)
                    thirdWeather(json)
                })
                .catch( (e) => {
                    catchErr(e)
                })
        })
    };
    let geoError = function(error) {
        console.log('Error occurred. Error code: ' + error.code);
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
};
