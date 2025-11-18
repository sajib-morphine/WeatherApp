const apiKey = "bb919b8fa830469ff94e93dc16d5091d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// Extract data form api
async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    //check error
    if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";;
      
    }else{
      let data = await response.json();
    // Dispaly data
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").textContent = data.wind.speed + "km/h";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    if(data.weather[0].main == "Clouds" ){
        weatherIcon.src = "./img/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
          weatherIcon.src = "./img/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
          weatherIcon.src = "./img/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
          weatherIcon.src = "./img/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
          weatherIcon.src = "./img/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
          weatherIcon.src = "./img/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
    }
    
}


//Add event listener listen input field
btn.addEventListener("click",(e)=>{
    checkWeather(search.value);
})
