const axios = require('axios');


const apiKey = "9ccf94232b67a0f7021eaf9a142d7af6";


async function getWeatherData(cityName) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  const response = await axios.get(URL);
  return response.data;

}


console.log("Enter the City Name:");
process.stdin.on('data', async (data) => {
  const city = data.toString().trim();

  const weatherData = await getWeatherData(city);


  console.log(`Temperature: ${weatherData.main.temp}°C`);

  console.log(`Humidity: ${weatherData.main.humidity}%`);

  process.exit(0);
});
