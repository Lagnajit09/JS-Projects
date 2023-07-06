const API_KEY = "7405373f95ddf35c703669223139ed2c";
const API_link =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function myWeather(city) {
  const response = await fetch(API_link + city + `&appid=${API_KEY}`);
  var data = await response.json();

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather-details").style.display = "none";
  } else {
    document.querySelector(".weather .city").innerHTML = data.name;
    document.querySelector(".weather .temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".details .humidity").innerHTML =
      data.main.humidity + "%";
    document.querySelector(".details .wind").innerHTML =
      data.wind.speed + " km/h";

    document.querySelector(
      ".weather img"
    ).src = `./images/${data.weather[0].main}.png`;

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather-details").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  myWeather(searchInput.value);
});
