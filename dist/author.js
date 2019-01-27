window.onload = () => {
	console.log("location.href", location.href)
	fetch('./authorsRu.json').then(response => {
		return response.json();
	}).then(data => {
		draw(data);
	})
}

function draw(data) {
	let info = `<img src="${data[3].image}" alt="image of the author" class="col-12 col-sm-8 col-md-5 col-lg-4 image-of-the-author rounded float-left">
				<h2 class="information__name">${data[3].name}</h2>
				<p class="information__biography">${data[3].biography}</p>`;
	$('.information').append(info);

	$('.books').append(data[3].books);

	let galleryPictures = ``;
	for (let i = 0, len = data[3].gallery.length; i < len; i++) {
		galleryPictures += `<img src="${data[3].gallery[i]}" alt="picture ${data[3].gallery[i]}">`
	}
	$('.gallery').append(galleryPictures);

	$('.video').append(data[3].video);

	$('.map').append(data[3].map);
}
