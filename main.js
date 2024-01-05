const mainContainer = document.querySelector('.main-container');
const inputCity = document.querySelector('.input-city');

const searchButton= document.querySelector('.search-btn');

const cityName= document.querySelector('.city-name');

const temperature= document.querySelector('.temperature');

const  pressure= document.querySelector('.pressure');

const weatherIcon = document.querySelector('.weather-icon');

const  weather = document.querySelector('.weather');

const  humidity = document.querySelector('.humidity');

const wind = document.querySelector('.wind');
const errorMsg = document.querySelector('.error-msg');
const weatherInfoContent = document.querySelector('.weather-content-info');




const api_Key = 'c25cdaf7bef7802543445f8111e63dc0';
const api_Url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function getWeather(city){
    const response = await fetch(api_Url + city + `&appid=${api_Key}`);

    if(response.status == 404){
     errorMsg.style.display = "block";
        weatherInfoContent.style.display = "none"
    } else{

        let data = await response.json();

        console.log(data);

      
        cityName.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp) + "°C";
        pressure.innerHTML = `Feels like ${Math.round(data.main.feels_like)}°`;
        weather.innerHTML = data.weather[0].main;
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML =  data.wind.speed + " km/h ";
   
        if(data.weather[0].main == "Clouds"){
           weatherIcon.src = "images/cloudy-day.png";
          mainContainer.style.backgroundImage = "url('images/cloudy.jpg')";
          mainContainer.style.backgroundSize = "cover";
          mainContainer.style.backgroundPosition = "center";
           

        } else if(data.weather[0].main == "Snow"){
           weatherIcon.src = "images/snow.png";
           mainContainer.style.backgroundImage = "url('images/snowy.jpg')";
          mainContainer.style.backgroundSize = "cover";
          mainContainer.style.backgroundPosition = "center";
          
        } else if(data.weather[0].main == "Rain"){
           weatherIcon.src = "images/rain.png";
           mainContainer.style.backgroundImage = "url('images/rainy.jpg')";
           mainContainer.style.backgroundSize = "cover";
           mainContainer.style.backgroundPosition = "center";

         
        }else if(data.weather[0].main == "Mist"){
           weatherIcon.src = "images/mist.png";
           mainContainer.style.backgroundImage = "url('images/cloudy-night.jpg')";
          mainContainer.style.backgroundSize = "cover";
         mainContainer.style.backgroundPosition = "center";
         
        } else if(data.weather[0].main == "Drizzle"){
           weatherIcon.src = "images/drizzlesmall.png";
           mainContainer.style.backgroundImage = "url('images/cloudy.jpg')";
          mainContainer.style.backgroundSize = "cover";
          mainContainer.style.backgroundPosition = "center";
         
        } else if(data.weather[0].main == "Clear"){
           weatherIcon.src = "images/sunny.png";
           mainContainer.style.backgroundImage = "url('images/clear-day.jpg')";
          mainContainer.style.backgroundSize = "cover";
          mainContainer.style.backgroundPosition = "center";
         
        }
   
        errorMsg.style.display = "none";
   
       
   
   
       
    }

   
}

getWeather();



searchButton.addEventListener("click", () =>{
   getWeather(inputCity.value);

   inputCity.value = '';

 weatherInfoContent.style.display = 'block';
})








