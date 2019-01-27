// const L = require('leaflet');
// import { L } from 'leaflet';

window.onload = () => {
	fetch('./authorsRu.json').then(response => {
		return response.json();
	}).then(data => {
		draw(data, localStorage.getItem('index'));
	})
}

function draw(data, i) {
	let info = `<img src="${data[i].image}" alt="image of the author" class="col-12 col-sm-8 col-md-5 col-lg-4 image-of-the-author">
				<h2 class="information__name">${data[i].name}</h2>
				<p class="information__biography">${data[i].biography}</p>`;
	$('.information').append(info);

	let booksArr = data[i].books;
	let booksEl = `<ul>`;
	for (let k = 0, len = booksArr.length; k < len; k++) {
		booksEl += `<li>${booksArr[k]}</li>` 
	}
	booksEl += `</ul>`
	$('.books').append(booksEl);

	// let galleryPictures = ``;
	// for (let j = 0, len = data[i].gallery.length; j < len; j++) {
	// 	galleryPictures += `<img src="${data[i].gallery[j]}" alt="picture ${data[i].gallery[j]}">`
	// }
	// $('.gallery').append(galleryPictures);
	let galleryPictures = '<div class="container"><div class="row">';
	for (let j = 0, len = data[i].gallery.length; j < len; j++) {
		galleryPictures += `
			<div class="col-lg-3 col-md-4 col-6 thumb">
				<a data-fancybox="gallery" href="${data[i].gallery[j]}">
						<img class="img-fluid" src="${data[i].gallery[j]}" alt="${data[i].gallery[j]}">
				</a>
		</div>`;
	}
	galleryPictures += '</div></div>';
	$('.gallery').append(galleryPictures);

	// $('.video').append(data[i].video);
  const videoEl = `<div class="video-container__item">
    <img class="card-img-top img-fluid" src="${data[i].gallery[0]}" />
    <a data-fancybox href="${data[i].video[0]}">${data[i].video[1]}</a></div>`;
	$('.video').append(videoEl);


	// $('.map').append(data[i].map);

  const accessToken = 'pk.eyJ1IjoieXJ0eXJ0eSIsImEiOiJjanJkeHJkNWQxbHo2M3lycDliZGowNTZwIn0.eJAnyug_wV2ikOdv2bRhZg';
  const mymap = L.map('map').setView(data[i].map, 13);
  L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${accessToken}`, {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: `${accessToken}`,
  }).addTo(mymap);

  L.marker(data[i].map).addTo(mymap);
}
