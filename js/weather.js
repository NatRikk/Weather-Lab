// Map weather conditions to icons
const weatherIconMap = {
    sunny: '../assets/sunny.png',
    cloudy: '../assets/cloudy.png',
    rainy: '../assets/rainy.png',
    snowy: '../assets/snowy.png'
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