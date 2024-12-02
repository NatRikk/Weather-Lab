// Map weather conditions to icon paths
const weatherIconMap = {
    clear: '../assets/sunny.png',  // sunny icon
    clouds: '../assets/cloudy.png',  // cloudy icon
    rain: '../assets/rainy.png',  // rainy icon
    snow: '../assets/snowy.png',  // snowy icon
    default: '../assets/default.png'  // fallback icon
  };
  
  // Function to update the weather data on the page
  function updateWeatherDisplay(weatherData) {
    // Update city and temperature
    document.getElementById('location').innerText = weatherData.city;
    document.getElementById('temperature').innerText = `${weatherData.temperature}°`;
  
    // Get the appropriate weather icon
    const iconPath = weatherIconMap[weatherData.condition] || weatherIconMap.default;
    document.getElementById('weather-icon').src = iconPath;
  }
  
  // Function to fetch weather data from the OpenWeatherMap API
  async function fetchWeather(zipCode) {
    const apiKey = '3d44767fee41af418e6d0d6ec40b7920'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch weather data: ${response.statusText}`);
      }
  
      // Parse the JSON response
      const weatherData = await response.json();
      console.log('Weather Data:', weatherData); // Log the response for debugging
  
      // Format the data for display
      const formattedData = {
        city: weatherData.name,
        temperature: Math.round(weatherData.main.temp), // Round the temperature to nearest integer
        condition: weatherData.weather[0].main.toLowerCase() // Get weather condition (e.g., clear, clouds)
      };
  
      // Update the display with the fetched weather data
      updateWeatherDisplay(formattedData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Display a fallback message and icon in case of an error
      document.getElementById('location').innerText = 'Weather data unavailable';
      document.getElementById('temperature').innerText = '--°';
      document.getElementById('weather-icon').src = '../assets/default.png'; // Use a default icon
    }
  }
  
  // Example: Call the fetchWeather function with a sample ZIP code (e.g., '10001' for New York, NY)
  fetchWeather('65802'); // You can replace this with any ZIP code
  