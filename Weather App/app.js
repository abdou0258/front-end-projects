const apiKey = "e4cec4872fe925322b8511216a97e60a";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather-icon");

async function getWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  var data = await response.json();

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherImg.src = "cloudy.png";
    } else if (data.weather[0].main == "Clear") {
      weatherImg.src =
        "https://www.pngkit.com/png/full/132-1321741_sunny-sunny-icon-white.png";
    } else if(data.weather[0].main == "Rain"){
      weatherImg.src = "rainy.png";
    }
    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  getWeather(searchInput.value);
});
