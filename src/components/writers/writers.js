import 'bootstrap';
import $ from 'jquery';
import template from './writers.template';
import './writers.css';
import langJson from '../../data/language.json';
import authorsRuJson from '../../data/authorsRu.json';

import renderWriterPage from '../writer/writer';

import bykovAvatar from './images/bykovAvatar.jpg';
import adamovichAvatar from './images/adamovichAvatar.jpg';
import brovkaAvatar from './images/brovkaAvatar.jpg';
import bahushevichAvatar from './images/bahushevichAvatar.jpg';
import tankAvatar from './images/tankAvatar.jpg';
import melezhAvatar from './images/melezhAvatar.jpg';

const images = [bykovAvatar, adamovichAvatar, brovkaAvatar, bahushevichAvatar, tankAvatar,
  melezhAvatar];

const renderTranslatedInterfaceElements = (data) => {
  $('.nav-link')[0].innerHTML = data.home;
  $('.nav-link')[1].innerHTML = data.writers;
  $('.search__btn')[0].innerHTML = data.search;
  $('.name-section')[0].innerHTML = data.authorOfTheDay;
  $('.name-section')[1].innerHTML = data.authors;
  $('footer')[0].innerHTML = data.team;
};

const drawContent = (langData) => {
  const data = authorsRuJson;
  const len = Object.keys(data).length;
  const directory = $('.directory');

  for (let i = 0; i < len; i += 1) {
    const card = `
      <article class="card mb-2">
        <div class="card-body row">
          <img src="${images[i]}" alt="image of a autor" class="image-of-an-authors col-sm-4">
          <div class="description-of-an-autors col-sm-8">
            <h5 class="card-title">${data[i].name}</h5>
            <p class="card-text">${data[i].description}</p>
            <a href="" class="btn btn-outline-info read-button" data-writer="${i}">${langData.read}</a>
          </div>
        </div>
      </article>`;
    directory.append(card);
  }

  const rand = Math.floor(Math.random() * len);
  $('.author-of-the-day').append(`
    <div class="card">
      <div class="card-body">
        <img src="${images[rand]}" class="image-author-of-the-day d-block col-12 col-md-6 col-lg-4 col-xl-12" alt="Author of the day">
        <h5 class="card-title writer">${data[rand].name}</h5>
        <p class="card-text description">${data[rand].description}</p>
        <a href="" class="btn btn-outline-info read-button" data-writer="${rand}">${langData.read}</a>
      </div>
    </div>`);

  document.querySelectorAll('.read-button').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      localStorage.setItem('index', e.target.dataset.writer);

      $('body').empty();
      renderWriterPage();
    });
  });
};

export default () => {
  $('body').append(template);

  const lang = localStorage.getItem('lang');
  renderTranslatedInterfaceElements(langJson[lang]);

  drawContent(langJson[lang]);
};
