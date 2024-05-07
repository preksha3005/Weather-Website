//https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=95b762a42efadb4eea4cf652d19e9ee2

const sbtn = document.querySelector('.sbtn');
const temp = document.querySelector('.temp');
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');
    const wicon = document.querySelector('.wicon');
    const weather=document.querySelector('.weather');
sbtn.addEventListener('click', function () {
    weather.classList.add('active');
    const text=document.querySelector('.text');
    const city = document.querySelector('.city');
    const apikey = "95b762a42efadb4eea4cf652d19e9ee2";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text.value}&appid=${apikey}`).then(response =>
        response.json()).then(json => {
             
        switch (json.weather[0].main) {
            case "Clouds":
                wicon.src = "./images/clouds.png";
                break;
            case "Clear":
                wicon.src = "./images/clear.png";
                break;
            case "Rain":
                wicon.src = "./images/rain.png";
                break;
            case "Drizzle":
                wicon.src = "./images/drizzle.png";
                break;
            case "Mist":
                wicon.src = "./images/mist.png";
                break;
            case "Snow":
                wicon.src = "./images/snow.png";
        }
       
       
        temp.innerHTML = `${parseInt(json.main.temp) - 273}<span>°C</span>`;
        city.innerHTML = `${json.name}`;
        humidity.innerHTML = `${json.main.humidity}<span>%</span>`;
        wind.innerHTML = `${json.wind.speed}<span>m/s`;

    }).catch((error) => {
        console.error(error);
    });
    text.value="";

});

