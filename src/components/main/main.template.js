import ruFlag from './images/ruFlag.png';
import enFlag from './images/enFlag.png';
import byFlag from './images/byFlag.png';
import developer1 from './images/developer1.jpg';
import developer2 from './images/developer2.jpg';
import developer3 from './images/developer3.jpg';

export default `
<header class="bg-dark sticky-top">
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand logo pr-4" href="#">G38</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href=""><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="writers.html"><span class="sr-only">(current)</span></a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle language" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>

          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <button class="dropdown-item">
              <img src="${ruFlag}" alt="ru" class="flag-icon img-fluid">
              Русский язык
            </button>
            <button class="dropdown-item">
              <img src="${enFlag}" alt="en" class="flag-icon">
              English
            </button>
            <button class="dropdown-item">
              <img src="${byFlag}" alt="by" class="flag-icon">
              Беларуская мова
            </button>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  </div>
</header>

<main>
  <section class="container about-site">
    <h2 class="about-site__title"></h2>
    <p class="about-site__description"></p>
  </section>

  <section class="container team py-5">
    <h2 class="team__title"></h2>
    <div class="row mt-4">
    <article class="developer col-sm-4 ">
      <img src="${developer1}" alt="developer" class="developer__image">
      <h4 class="py-3 developer-name"></h4>
      <a href="https://github.com/f8b23lef" class="developer" data-toggle="tooltip" data-placement="bottom" title="https://github.com/f8b23lef">f8b23lef</a>
    </article>
    <article class="developer col-sm-4">
      <img src="${developer2}" alt="developer" class="developer__image">
      <h4 class="py-3 developer-name"></h4>
      <a href="https://github.com/vitalur" class="developer" data-toggle="tooltip" data-placement="bottom" title="https://github.com/vitalur">vitalur</a>
    </article>
    <article class="developer col-sm-4">
      <img src="${developer3}" alt="developer" class="developer__image">
      <h4 class="py-3 developer-name"></h4>
      <a href="https://github.com/tebeskashi" class="developer" data-toggle="tooltip" data-placement="bottom" title="https://github.com/tebeskashi">tebeskashi</a>
    </article>
    </div>
  </section>
</main>

<footer class="bg-dark footer mt-2 py-3">
  <div class="d-flex justify-content-center"></div>
</footer>
`;
