// Map weather conditions to icons
const weatherIconMap = {
    clear: '../assets/sunny.png',
    clouds: '../assets/cloudy.png',
    rain: '../assets/rainy.png',
    snow: '../assets/snowy.png',
    default: '../assets/default.png' // Default icon if condition is unrecognized
  };  
  
  // Function to fetch weather data from the API
  async function fetchWeather(zipCode) {
    try {
      const response = await fetch(`/api/curweather?zip=${zipCode}`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
  
      const weatherData = await response.json();
      updateWeatherDisplay(weatherData);
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('location').innerText = 'Error fetching weather data';
    }
  }
  
  // Function to update the weather display on the dashboard
  function updateWeatherDisplay(data) {
    const location = data.city || 'Unknown City';
    const temperature = data.temperature || '00';
    const condition = data.condition.toLowerCase() || 'unknown';
  
    // Update DOM elements
    document.getElementById('location').innerText = location;
    document.getElementById('temperature').innerText = `${temperature}°`;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.src = weatherIconMap[condition] || '';
    weatherIcon.alt = condition;
  }
  
  // Example: Fetch weather for a specific ZIP code
  fetchWeather('80005'); // Replace with dynamic ZIP code later  
  async function fetchWeather(zipCode) {
    const apiKey = '3d44767fee41af418e6d0d6ec40b7920'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${apiKey}`;
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch weather data: ${response.statusText}`);
      }
  
      const weatherData = await response.json();
      console.log('Weather Data:', weatherData); // Log response for debugging
  
      const formattedData = {
        city: weatherData.name,
        temperature: Math.round(weatherData.main.temp),
        condition: weatherData.weather[0].main.toLowerCase()
      };
      updateWeatherDisplay(formattedData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      document.getElementById('location').innerText = 'Weather data unavailable';
      document.getElementById('temperature').innerText = '--°';
      document.getElementById('weather-icon').src = '../assets/default.png'; // Use a fallback icon
    }
  }  