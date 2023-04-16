const apiKey = "b1e31f40ffb8dc476e1d8a911e032e46";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "mph";

        if(data.weather[0].main === "Clouds") {
            weatherIcon.src = "images-icon/clouds.png";
        } 
        else if(data.weather[0].main === "Clear") {
            weatherIcon.src = "images-icon/clear.png";
        } 
        else if(data.weather[0].main === "Rain") {
            weatherIcon.src = "images-icon/rain.png";
        } 
        else if(data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images-icon/drizzle.png";
        } 
        else if(data.weather[0].main === "Mist") {
            weatherIcon.src = "images-icon/mist.png";
        } 
        else if(data.weather[0].main === "Snow") {
            weatherIcon.src = "images-icon/snow.png";
        } 

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

