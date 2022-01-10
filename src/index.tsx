import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FzdHkwNjciLCJhIjoiY2t5MW4zaHVoMGNtaDJyb2R6NDVkMXNweCJ9.pvOSIBVNeNeBKHZbtzcqTg';


if (!navigator.geolocation) {
  alert('Tu navegador no tiene opción de Geolocation');
  throw new Error('Tu navegador no tiene opción de Geolocation');
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);

