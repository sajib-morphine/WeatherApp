const apiKey = "bb919b8fa830469ff94e93dc16d5091d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");

// Extract data form api
async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    // Dispaly data
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").textContent = data.wind.speed + "km/h";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
}

//Add event listener listen input field
btn.addEventListener("click",(e)=>{
    checkWeather(search.value);
})
