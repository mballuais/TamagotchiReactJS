import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherForm from '../molecules/WeatherForm';
import '../../App.css'; // Chemin mis à jour

const WeatherComponent = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const API_KEY = '4e35d68139ed6c96efca0398d301d75c';

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      const weatherCondition = response.data.weather[0].main.toLowerCase();

      // Regrouper certaines conditions complexes sous des catégories simples
      switch (weatherCondition) {
        case 'clear':
          document.body.className = 'clear'; // Ciel clair
          break;
        case 'rain':
        case 'drizzle':
        case 'thunderstorm':
        case 'squall':
        case 'tornado':
          document.body.className = 'rain'; // Pluie et conditions associées
          break;
        case 'clouds':
        case 'smoke':
        case 'dust':
        case 'sand':
        case 'haze':
          document.body.className = 'clouds'; // Nuageux et conditions associées
          break;
        case 'snow':
          document.body.className = 'snow'; // Neige
          break;
        case 'mist':
        case 'fog':
        case 'ash':
          document.body.className = 'night'; // Nuit, brume, brouillard, cendres
          break;
        default:
          document.body.className = 'clear'; // Par défaut, ciel clair
          break;
      }
    } catch (error) {
      alert("Lieu non trouvé. Veuillez entrer une ville valide.");
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="weather-container">
      {!weather && (
        <WeatherForm location={location} setLocation={setLocation} onFetchWeather={fetchWeatherData} />
      )}
      {weather && (
        <div>
          <p>Température actuelle: {Math.round(weather.main.temp)}°C</p>
          <p>Conditions : {weather.weather[0].description}</p>
          <p>Heure : {currentTime.toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
