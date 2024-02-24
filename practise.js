const apikey ="cdc1b9191464e59cb545d46186dd4cb8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=manchester";

async function checWeather()
{
    const response = await fetch(apiUrl + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
}

checWeather();