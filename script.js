const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6388d44fadmshc1091c19105b23fp128d43jsnfe49dde8e9b9",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city)=>{
    cityName.innerHTML=city


fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    // cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}




const getWeather2 = (cit)=>{

fetch(
"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + cit,
options
)
.then((response) => response.json())
.then((response) => {
  console.log(response);

  if(cit ==="Chandigarh"){
    tempc.innerHTML = response.temp;
    feels_likec.innerHTML = response.feels_like;
    humidityc.innerHTML = response.humidity;
    wind_speedc.innerHTML = response.wind_speed;
  }

    else if(cit==="Bangalore"){
    tempb.innerHTML = response.temp;
    feels_likeb.innerHTML = response.feels_like;
    humidityb.innerHTML = response.humidity;
    wind_speedb.innerHTML = response.wind_speed;
  }

   else if(cit==="Lucknow"){
    templ.innerHTML = response.temp;
    feels_likel.innerHTML = response.feels_like;
    humidityl.innerHTML = response.humidity;
    wind_speedl.innerHTML = response.wind_speed;
  }

    else if(cit==="Kolkata"){
    tempk.innerHTML = response.temp;
    feels_likek.innerHTML = response.feels_like;
    humidityk.innerHTML = response.humidity;
    wind_speedk.innerHTML = response.wind_speed;
  }
 
})

.catch((err) => console.error(err));
}

getWeather2("Chandigarh")
getWeather2("Bangalore")
getWeather2("Lucknow")
getWeather2("Kolkata")




submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")
 