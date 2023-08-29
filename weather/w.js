const API_KEY = 'b339c6d3c79c9b2c925f794827a5e47d';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

const cityNameElement = document.getElementById('city-name');
const cityInputElement = document.getElementById('city-input');
const searchButtonElement = document.getElementById('search-button');
const weatherIconElement = document.getElementById('weather-icon');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');
const descriptionElement = document.getElementById('description');

searchButtonElement.addEventListener('click', updateWeather);

async function getWeatherData(city) {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    return data;
}

function displayWeather(weatherData) {
    cityNameElement.textContent = `Weather in ${weatherData.name}, ${weatherData.sys.country}`;
    weatherIconElement.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    //weatherIconElement.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    temperatureElement.textContent = `Temperature: ${weatherData.main.temp}°C`;
    humidityElement.textContent = `Humidity: ${weatherData.main.humidity}%`;
    windSpeedElement.textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;
    descriptionElement.textContent = `Description: ${weatherData.weather[0].description}`;
}

async function updateWeather() {
    const city = cityInputElement.value;
    const weatherData = await getWeatherData(city);
    displayWeather(weatherData);
}
