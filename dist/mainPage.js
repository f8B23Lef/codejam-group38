const language = ['ru', 'en', 'by'];

window.onload = () => {
	$('.language')[0].innerHTML = 'ru';
	fetch('./authors.json').then(response => {
		return response.json();
	}).then(data => {
		draw(data);
	})
}


function draw(data) {
	
	let len = Object.keys(data).length;
	const directory = $('.directory');
	for (let i = 0; i < len; i++) {
		let card = `
				<article class="card mb-2">
				  	<div class="card-body row">
				  		<img src="${data[i].image}" alt="image of a autor" class="image-of-an-authors col-sm-4">
				  		<div class="description-of-an-autors col-sm-8">
				  			<h5 class="card-title">${data[i].name}</h5>
						    <p class="card-text">${data[i].description}</p>
						    <a href="writer.html" class="btn btn-outline-info" onClick="go(${i})">Read</a>
				  		</div>
					</div>
				</article>
		`;
		directory.append(card);
	}
	let rand = Math.floor(Math.random() * len);
	$('.author-of-the-day').append(`
				<div class="card">
					<div class="card-body">
						<img src="${data[rand].image}" class="image-author-of-the-day d-block col-12 col-md-6 col-lg-4 col-xl-12" alt="Author of the day">
					    <h5 class="card-title writer">${data[rand].name}</h5>
					    <p class="card-text description">${data[rand].description}</p>
					    <a href="writer.html" class="btn btn-outline-info" onClick="go(${rand})">Read</a>
					</div>
				</div>`);
}

function go(i) {
	localStorage.setItem('index', i);
	location.href += "writer.html";
}

function changeLanguage(index) {
	$('.language')[0].innerHTML = language[index];
}