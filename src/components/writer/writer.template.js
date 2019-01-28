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
            <a class="nav-link link-home" href="index.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-writers" href="#">Writers<span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>

<main>
  <section class="basic-information row container mt-5">
    <div class="information"></div>

    <div id="root"></div>

    <div class="books"></div>

    <div class="gallery"></div>

    <div class="video video-container"></div>

    <div class="map" id="map"></div>
  </section>
</main>

<footer class="bg-dark footer mt-2 py-3">
  <p>Group 38</p>
  <div class="d-flex justify-content-center"></div>
</footer>
`;
