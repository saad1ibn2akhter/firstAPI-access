const apikey ="cdc1b9191464e59cb545d46186dd4cb8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=manchester";

async function checWeather()
{
    const response = await fetch(apiUrl + `&appid=${apikey}`);
    var data = await response.json();
    const ctyName =" City Name : "+ data.name;
    const temp = "temparature :" + data.main.temp;
    const lon = "longitude "+ data.coord.lon;
    const lat  = "latitude "+ data.coord.lat;
    const feelingTemp = "feels like :" +data.main.feels_like;
    const humidity ="humidity :"+ data.main.humidity;
    console.log(ctyName , temp,lon,lat,feelingTemp,humidity);

    console.log(data);
}

checWeather();