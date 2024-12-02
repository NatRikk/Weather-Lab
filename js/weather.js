const weatherIconMap = {
    sunny: '../assets/sunny.png',
    cloudy: '../assets/cloudy.png',
    rainy: '../assets/rainy.png',
    snowy: '../assets/snowy.png'
  };
  
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
  
  function updateWeatherDisplay(data) {
    const location = data.city || 'Unknown City';
    const temperature = data.temperature || '00°';
    const condition = data.condition.toLowerCase() || 'unknown';
  
    document.getElementById('location').innerText = location;
    document.getElementById('temperature').innerText = `${temperature}°`;
    document.getElementById('weather-icon').src = weatherIconMap[condition] || '';
    document.getElementById('weather-icon').alt = condition;
  }
  
  // Example: Fetch weather for a sample ZIP code
  fetchWeather('10001'); // Replace with user's ZIP code input in the future
  