

// jshint esversion:6
const input = document.getElementById('input');
const temp = document.getElementById('temp');
const tmax = document.getElementById('tempMax');
const tmin = document.getElementById('tempMin');
const city = document.getElementById('city');
const country = document.getElementById('country');
const lat = document.getElementById('lat');
const long = document.getElementById('long');
const pressure = document.getElementById('press');
const humidity = document.getElementById('hum');
const forecast = document.getElementById('fcast');

const api = "http://api.openweathermap.org/data/2.5/weather?q=";
//const apiKey = "&APPID=c196ed11ec9e2335f621e53fb67dd639";
const unitsFormat = "&units=metric";

input.addEventListener('keydown', (e) =>{
  if (e.keyCode == 13){
    const url = api + e.target.value + apiKey + unitsFormat;
    fetch(url)
     .then((res) => res.json())
     .then((data) =>{
       temp.innerHTML = data.main.temp;
       tmax.innerHTML = data.main.temp_max;
       tmin.innerHTML = data.main.temp_min;
       city.innerHTML = data.name;
       country.innerHTML = data.sys.country;
       lat.innerHTML = data.coord.lat;
       long.innerHTML = data.coord.lon;
       pressure.innerHTML = data.main.pressure/10;
       humidity.innerHTML = data.main.humidity;
       forecast.innerHTML = data.weather[0].main;
      })
  }
});
