const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind_speed');

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=1920c63e735a86e44c4489c718998c3a&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  humidity.textContent = `humidity: ${data.main.humidity.toFixed(0)}%`;
  windSpeed.textContent = `wind speed: ${data.wind.speed} meter/sec`;
  weatherDescription.textContent = data.weather[0].description;
}

function getCity() {
  if (localStorage.getItem('city') === null) {
    city.textContent = 'Ryazan';
  } else {
    city.textContent = localStorage.getItem('city');
  }
}

function setCity(event) {

  if (event.type === 'keypress') {
    // Make sure enter is pressed
    if (event.which == 13 || event.keyCode == 13) {
      getWeather();
      localStorage.setItem('city', event.target.innerText);
      city.blur();
    }
  } else {
    localStorage.setItem('city', event.target.innerText);
  }

}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
city.addEventListener('blur', getCity);

getCity();

