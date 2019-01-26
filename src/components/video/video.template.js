import coverBykov from './img/coverBykov.jpg';
import coverAdamovich from './img/coverAdamovich.jpg';

export default `
<section class="video-container">
  <div class="video-container__item">
    <img class="card-img-top img-fluid" src="${coverBykov}" />
    <a data-fancybox href="https://www.youtube.com/embed/4BGR3b-wV4E">Программа "Политбюро". 15 января 1993 год. В студии писатель Алесь Адамович.</a>
  </div>
</section>

<section class="video-container">
  <div class="video-container__item">
    <img class="card-img-top img-fluid" src="${coverAdamovich}" />
    <a data-fancybox href="https://www.youtube.com/watch?v=rnVdtUm30Ew">Василь быков. Цикл передач "Фронтовые Страницы"</a>
  </div>
</section>
`;
