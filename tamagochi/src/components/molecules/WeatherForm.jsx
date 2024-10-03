import React from 'react';
import Input from '../atoms/input';
import Button from '../atoms/Button'; // Utilisation de ton bouton existant

const WeatherForm = ({ location, setLocation, onFetchWeather }) => {
  return (
    <div>
      <Input 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder="Entrez votre ville ou code postal" 
      />
      <Button onClick={onFetchWeather} label="Obtenir la météo" />
    </div>
  );
};

export default WeatherForm;
