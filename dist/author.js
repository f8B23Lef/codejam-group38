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

	let galleryPictures = ``;
	for (let j = 0, len = data[i].gallery.length; j < len; j++) {
		galleryPictures += `<img src="${data[i].gallery[j]}" alt="picture ${data[i].gallery[j]}">`
	}
	$('.gallery').append(galleryPictures);

	$('.video').append(data[i].video);

	$('.map').append(data[i].map);
}
