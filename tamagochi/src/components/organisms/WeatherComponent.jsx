import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherForm from '../molecules/WeatherForm';
import '../../App.css'; // Chemin mis à jour

const WeatherComponent = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [localTime, setLocalTime] = useState(''); // Pour l'heure locale
  const API_KEY = '4e35d68139ed6c96efca0398d301d75c';

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);

      // Obtenir le décalage horaire pour calculer l'heure locale
      const timezoneOffset = response.data.timezone; // Décalage en secondes
      const currentTimestamp = Math.floor(Date.now() / 1000); // Obtenir l'heure actuelle en timestamp Unix (secondes)
      const localUnixTime = currentTimestamp + timezoneOffset; // Ajuster le timestamp avec le fuseau horaire
      const localDate = new Date(localUnixTime * 1000); // Convertir en millisecondes pour Date

      setLocalTime(localDate.toLocaleTimeString()); // Mettre à jour l'heure locale

      // Lever et coucher du soleil
      const sunrise = response.data.sys.sunrise; // Timestamp du lever du soleil
      const sunset = response.data.sys.sunset; // Timestamp du coucher du soleil

      // Déterminer s'il fait nuit
      const isNight = localUnixTime < sunrise || localUnixTime > sunset;

      // Appliquer la classe du body en fonction de la condition
      if (isNight) {
        document.body.className = 'night'; // Appliquer le fond d'écran "nuit"
      } else {
        // Regrouper certaines conditions complexes sous des catégories simples
        const weatherCondition = response.data.weather[0].main.toLowerCase();
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
      }
    } catch (error) {
      alert("Lieu non trouvé. Veuillez entrer une ville valide.");
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (weather) {
        const timezoneOffset = weather.timezone;
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const localUnixTime = currentTimestamp + timezoneOffset;
        const localDate = new Date(localUnixTime * 1000);
        setLocalTime(localDate.toLocaleTimeString());
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [weather]);

  return (
    <div className="weather-container">
      {!weather && (
        <WeatherForm location={location} setLocation={setLocation} onFetchWeather={fetchWeatherData} />
      )}
      {weather && (
        <div>
          <p>Température actuelle: {Math.round(weather.main.temp)}°C</p>
          <p>Conditions : {weather.weather[0].description}</p>
          <p>Heure locale : {localTime}</p> {/* Afficher l'heure locale */}
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
