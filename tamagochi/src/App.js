// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LauncherPage from './components/pages/LauncherPage';
import HomePage from './components/pages/HomePage';
import 'nes.css/css/nes.min.css';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Route pour la page de lancement */}
          <Route path="/" element={<LauncherPage />} />
          {/* Route pour la page principale du Tamagotchi */}
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
