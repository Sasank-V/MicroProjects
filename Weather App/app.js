const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon"); 

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await response.json();
        document.querySelector(".city").innerText = data.name; 
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C"; 
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + " Km/h";
        
        let sky = data.weather[0].main;
        document.querySelector(".type").innerText = sky; 
        weatherIcon.src = "images/" + sky.toLowerCase() +".png";
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
}
btn.addEventListener("click",()=>{
    checkWeather(search.value);
})
// checkWeather(city);
