const apiKey = "bb919b8fa830469ff94e93dc16d5091d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=germany";

// Extract data form api
async function checkWeather() {
    let response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();
    // Dispaly data
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").textContent = data.wind.speed + "km/h";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
}

checkWeather();