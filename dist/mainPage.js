const language = ['ru', 'en', 'by'];

window.onload = () => {
	let lang;
	if (localStorage.getItem('lang')) {
		lang = 	localStorage.getItem('lang');
	} else {
		localStorage.setItem('lang', 'ru');
		lang = 'ru';	
	}
	$('.language')[0].innerHTML = lang;
	lang = $('.language')[0].innerHTML;
	fetch('./language.json').then(response => {
		return response.json();
	}).then(data => {
		draw(data[lang]);
	})
}


function draw(data) {
	$('.nav-link')[0].innerHTML = data.home;
	$('.nav-link')[1].innerHTML = data.writers;
	$('.about-site__title')[0].innerHTML = data.titleOfDescription;
	$('.about-site__description')[0].innerHTML = data.description;	
	$('.team__title')[0].innerHTML = data.team;	
	for (let i = 0; i < data.name.length; i++) {
		$('.developer-name')[i].innerHTML = data.name[i];
	}
	$('footer')[0].innerHTML = data.team;	
}

function go(i) {
	localStorage.setItem('index', i);
}

function changeLanguage(index) {
	$('.language')[0].innerHTML = language[index];
	localStorage.setItem('lang', language[index]);
	location.reload(true);
}

function search() {
	alert('1')
}