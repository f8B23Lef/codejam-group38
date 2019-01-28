import 'bootstrap';
import $ from 'jquery';
import template from './writer.template';
import './writer.css';
import langJson from '../../data/language.json';
import authorsRuJson from '../../data/authorsRu.json';

import renderWritersPage from '../writers/writers';

import bykovAvatar from './images/bykov/bykovAvatar.jpg';
import brovkaAvatar from './images/brovka/brovkaAvatar.jpg';
import bahushevichAvatar from './images/bahushevich/bahushevichAvatar.jpg';
import adamovichAvatar from './images/adamovich/adamovichAvatar.jpg';
import tankAvatar from './images/tank/tankAvatar.jpg';
import melezhAvatar from './images/melezh/melezhAvatar.jpg';

import bykov1 from './images/bykov/bykov1.jpg';
import bykov2 from './images/bykov/bykov2.jpg';
import bykov3 from './images/bykov/bykov3.jpg';
import bykov4 from './images/bykov/bykov4.jpg';
import bykov5 from './images/bykov/bykov5.jpg';
import bykov6 from './images/bykov/bykov6.jpg';
import bykov7 from './images/bykov/bykov7.jpg';
import bykov8 from './images/bykov/bykov8.jpg';

import adamovich1 from './images/adamovich/adamovich1.jpg';
import adamovich2 from './images/adamovich/adamovich2.jpg';
import adamovich3 from './images/adamovich/adamovich3.jpg';
import adamovich4 from './images/adamovich/adamovich4.jpg';
import adamovich5 from './images/adamovich/adamovich5.jpg';
import adamovich6 from './images/adamovich/adamovich6.jpg';
import adamovich7 from './images/adamovich/adamovich7.jpg';

import brovka1 from './images/brovka/brovka1.jpg';
import brovka2 from './images/brovka/brovka2.jpg';
import brovka3 from './images/brovka/brovka3.jpg';
import brovka4 from './images/brovka/brovka4.jpg';
import brovka5 from './images/brovka/brovka5.jpg';
import brovka6 from './images/brovka/brovka6.jpg';
import brovka7 from './images/brovka/brovka7.jpg';

import bahushevich1 from './images/bahushevich/bahushevich1.jpg';
import bahushevich2 from './images/bahushevich/bahushevich2.jpg';
import bahushevich3 from './images/bahushevich/bahushevich3.jpg';
import bahushevich4 from './images/bahushevich/bahushevich4.jpg';
import bahushevich5 from './images/bahushevich/bahushevich5.jpg';
import bahushevich6 from './images/bahushevich/bahushevich6.jpg';

import tank1 from './images/tank/tank1.jpg';
import tank2 from './images/tank/tank2.jpg';
import tank3 from './images/tank/tank3.jpg';
import tank4 from './images/tank/tank4.jpg';
import tank5 from './images/tank/tank5.jpg';

import melezh1 from './images/melezh/melezh1.jpg';
import melezh2 from './images/melezh/melezh2.jpg';
import melezh3 from './images/melezh/melezh3.jpg';
import melezh4 from './images/melezh/melezh4.jpg';
import melezh5 from './images/melezh/melezh5.jpg';

const L = require('leaflet');

const writerAvatars = [bykovAvatar, adamovichAvatar, brovkaAvatar, bahushevichAvatar, tankAvatar,
  melezhAvatar];

const gallery = {
  0: [bykov1, bykov2, bykov3, bykov4, bykov5, bykov6, bykov7, bykov8],
  1: [adamovich1, adamovich2, adamovich3, adamovich4, adamovich5, adamovich6, adamovich7],
  2: [brovka1, brovka2, brovka3, brovka4, brovka5, brovka6, brovka7],
  3: [bahushevich1, bahushevich2, bahushevich3, bahushevich4, bahushevich5, bahushevich6],
  4: [tank1, tank2, tank3, tank4, tank5],
  5: [melezh1, melezh2, melezh3, melezh4, melezh5],
};

const renderTranslatedInterfaceElements = (data) => {
  $('.nav-link')[0].innerHTML = data.home;
  $('.nav-link')[1].innerHTML = data.writers;
};

const drawContent = () => {
  const data = authorsRuJson;
  const i = localStorage.getItem('index');
  const info = `<img src="${writerAvatars[i]}" alt="image of the author" class="col-12 col-sm-8 col-md-5 col-lg-4 image-of-the-author">
    <h2 class="information__name">${data[i].name}</h2>
    <p class="information__biography">${data[i].biography}</p>`;
  $('.information').append(info);

  const booksArr = data[i].books;
  let booksEl = '<ul>';
  for (let k = 0, len = booksArr.length; k < len; k += 1) {
    booksEl += `<li>${booksArr[k]}</li>`;
  }
  booksEl += '</ul>';
  $('.books').append(booksEl);

  let galleryPictures = '<div class="container"><div class="row">';
  for (let j = 0, len = gallery[i].length; j < len; j += 1) {
    galleryPictures += `<div class="col-lg-3 col-md-4 col-6 thumb">
      <a data-fancybox="gallery" href="${gallery[i][j]}">
      <img class="img-fluid" src="${gallery[i][j]}" alt="${gallery[i][j]}">
      </a>
      </div>`;
  }
  galleryPictures += '</div></div>';
  $('.gallery').append(galleryPictures);

  const videoEl = `<div class="video-container__item">
    <img class="card-img-top img-fluid" src="${writerAvatars[i]}" />
    <a data-fancybox href="${data[i].video[0]}">${data[i].video[1]}</a>
    </div>`;
  $('.video').append(videoEl);

  const accessToken = 'pk.eyJ1IjoieXJ0eXJ0eSIsImEiOiJjanJkeHJkNWQxbHo2M3lycDliZGowNTZwIn0.eJAnyug_wV2ikOdv2bRhZg';
  const mymap = L.map('map').setView(data[i].map, 13);
  L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${accessToken}`, {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: `${accessToken}`,
  }).addTo(mymap);

  L.marker(data[i].map).addTo(mymap);
};

export default () => {
  $('body').append(template);

  document.querySelector('.link-writers').addEventListener('click', (e) => {
    e.preventDefault();

    $('body').empty();
    renderWritersPage();
  });

  const lang = localStorage.getItem('lang');

  renderTranslatedInterfaceElements(langJson[lang]);

  drawContent();
};
