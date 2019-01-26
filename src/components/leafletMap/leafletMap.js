import template from './leafletMap.template';
import './leafletMap.css';

const L = require('leaflet');

export default () => {
  const bodyEl = document.querySelector('body');
  bodyEl.insertAdjacentHTML('afterbegin', template);

  const accessToken = 'pk.eyJ1IjoieXJ0eXJ0eSIsImEiOiJjanJkeHJkNWQxbHo2M3lycDliZGowNTZwIn0.eJAnyug_wV2ikOdv2bRhZg';
  const mymap = L.map('mapid').setView([53.863876, 27.485482], 13);
  L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${accessToken}`, {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: `${accessToken}`,
  }).addTo(mymap);

  const marker = L.marker([53.863876, 27.485482]).addTo(mymap);
  marker.bindPopup('<b>Hello world!</b>').openPopup();
};
