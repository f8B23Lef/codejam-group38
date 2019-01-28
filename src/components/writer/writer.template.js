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
  <section class="basic-information container mt-5">
    <div class="information row"></div>
  </section>

  <section id="root" class="border-bottom"></section>
  <script>!function(l){function e(e){for(var r,t,n=e[0],o=e[1],u=e[2],f=0,i=[];f<n.length;f++)t=n[f],p[t]&&i.push(p[t][0]),p[t]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(l[r]=o[r]);for(s&&s(e);i.length;)i.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,r=0;r<c.length;r++){for(var t=c[r],n=!0,o=1;o<t.length;o++){var u=t[o];0!==p[u]&&(n=!1)}n&&(c.splice(r--,1),e=f(f.s=t[0]))}return e}var t={},p={2:0},c=[];function f(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return l[e].call(r.exports,r,r.exports,f),r.l=!0,r.exports}f.m=l,f.c=t,f.d=function(e,r,t){f.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(r,e){if(1&e&&(r=f(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)f.d(t,n,function(e){return r[e]}.bind(null,n));return t},f.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(r,"a",r),r},f.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},f.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var s=n;a()}([])</script><script src="/static/js/1.b595cf80.chunk.js"></script><script src="/static/js/main.61f8fc85.chunk.js"></script>
  <section class="container books py-5 border-bottom"></section>

  <section class="gallery py-5 border-bottom"></section>

  <section class="video video-container py-5 "></section>

  <section class="map py-5" id="map"></section>
</main>

<footer class="bg-dark footer mt-2 py-3">
  <p>Group 38</p>
  <div class="d-flex justify-content-center"></div>
</footer>
`;
