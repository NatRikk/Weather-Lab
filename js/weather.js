const apiKey = '3d44767fee41af418e6d0d6ec40b7920'; // Your OpenWeatherMap API key

// Function to fetch weather data based on zip code
async function fetchWeather(zipCode) {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`; // Units in Fahrenheit
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();

      // Log data for debugging
      console.log("Weather Data:", data);

      // Update the location (City name)
      document.getElementById('location').textContent = data.name;

      // Update the temperature (in °F)
      document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°`;

      // Map OpenWeatherMap icon codes to custom icons
      const iconCode = data.weather[0].icon;  // Icon code like '01d', '02d', etc.
      let iconPath = '';

      // Map icon codes to your custom icons
      if (iconCode === '01d' || iconCode === '01n') {
        iconPath = '../assets/sunny.png';  // Clear sky
      } else if (iconCode === '02d' || iconCode === '02n' || iconCode === '03d' || iconCode === '03n') {
        iconPath = '../assets/cloudy.png';  // Cloudy
      } else if (iconCode === '09d' || iconCode === '09n' || iconCode === '10d' || iconCode === '10n') {
        iconPath = '../assets/rainy.png';  // Rain
      } else if (iconCode === '13d' || iconCode === '13n') {
        iconPath = '../assets/snowy.png';  // Snow
      } else {
        iconPath = '../assets/sunny.png';  // Default to sunny if no match
      }

      // Set the weather icon
      document.getElementById('weather-icon').src = iconPath;

    } else {
      throw new Error('Error fetching weather data: ' + response.statusText);
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('weather').innerHTML = '<p>Weather data unavailable</p>';
  }
}

// Fetch weather for a given zip code (e.g., New York's ZIP code: 10001)
fetchWeather('65802'); // Replace with any ZIP code you want to test
