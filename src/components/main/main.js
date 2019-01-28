import 'bootstrap';
import $ from 'jquery';
import template from './main.template';
import './main.css';
import langJson from '../json/language.json';

const renderTranslatedInterfaceElements = (data) => {
  $('.nav-link')[0].innerHTML = data.home;
  $('.nav-link')[1].innerHTML = data.writers;
  $('.about-site__title')[0].innerHTML = data.titleOfDescription;
  $('.about-site__description')[0].innerHTML = data.description;
  $('.team__title')[0].innerHTML = data.team;
  for (let i = 0; i < data.name.length; i += 1) {
    $('.developer-name')[i].innerHTML = data.name[i];
  }
  $('footer')[0].innerHTML = data.team;
};

const getCurLang = () => {
  let lang;
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  } else {
    localStorage.setItem('lang', 'ru');
    lang = 'ru';
  }
  $('.language')[0].innerHTML = lang;
  lang = $('.language')[0].innerHTML;
  renderTranslatedInterfaceElements(langJson[lang]);
};

export default () => {
  $('body').append(template);

  getCurLang();

  document.querySelectorAll('.dropdown-item').forEach((button) => {
    button.addEventListener('click', (e) => {
      // console.log('click', e.target.querySelector('img').alt);
      const index = e.target.querySelector('img').alt;
      $('.language')[0].innerHTML = index;
      localStorage.setItem('lang', index);
      window.location.reload(true);
    });
  });
};
