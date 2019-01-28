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
          <li class="nav-item">
            <a class="nav-link link-home" href="index.html"><span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link link-writers" href="#"><span class="sr-only">(current)</span></a>
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0 search">
          <input class="form-control mr-sm-2 nav-search search__input" type="search" aria-label="Search">
          <button class="btn btn-outline-info my-2 p-0 nav-btn search__btn"></button>
        </div>
      </div>
    </nav>
  </div>
</header>

<main>
  <section class="container row pt-5">
    <article class="author-of-the-day col-xl-3">
      <h4 class="name-section p-1"></h4>
    </article>

    <section class="directory col-xl-8">
      <h4 class="name-section p-1"></h4>
    </section>
  </section>
</main>

<footer class="bg-dark footer mt-2 py-3">
  <p>Group 38</p>
  <div class="d-flex justify-content-center"></div>
</footer>
`;
