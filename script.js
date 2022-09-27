`use strict`;

const locations = [
	{
		id: 0,
		image: 'assets/img/waly-chrobrego.png',
		name: 'Wały Chrobrego',
		description:
			'Znane jako Taras Hakena (niem.: Hakenterrasse) – taras widokowy o długości ok. 500 m w Szczecinie na skarpie wzdłuż Odry. Słynne założenie urbanistyczno-architektoniczne współtworzące, wraz z Muzeum Narodowym w...',
		link: 'https://pl.wikipedia.org/wiki/Wa%C5%82y_Chrobrego',
	},
	{
		id: 1,
		image: 'assets/img/zamek-ksiazat.jpg',
		name: 'Zamek Książąt Pomorskich',
		description:
			'Renesansowy zamek usytuowany na Wzgórzu Zamkowym w Szczecinie, w sąsiedztwie Odry, historyczna siedziba rodu Gryfitów, władców księstwa pomorskiego, oraz nazwa instytucji kultury, administrującej Zamkiem...',
		link: 'https://pl.wikipedia.org/wiki/Zamek_Ksi%C4%85%C5%BC%C4%85t_Pomorskich_w_Szczecinie',
	},
	{
		id: 2,
		image: 'assets/img/muzeum-narodowe.jpg',
		name: 'Muzeum Narodowe w Szczecinie',
		description:
			'Muzeum wielodziałowe, gromadzące zbiory archeologii, sztuki dawnej i współczesnej, historyczne, numizmatyczne, nautyczne, etnograficzne...',
		link: 'https://pl.wikipedia.org/wiki/Muzeum_Narodowe_w_Szczecinie',
	},
	{
		id: 3,
		image: 'assets/img/us.jpg',
		name: 'Uniwersytet Szczeciński',
		description:
			'Uniwersytet Szczeciński został utworzony 1 października 1985 na mocy ustawy z 21 lipca 1984. Powstał z połączenia Wydziału Inżynieryjno-Ekonomicznego Transportu Politechniki Szczecińskiej (którego...',
		link: 'https://pl.wikipedia.org/wiki/Uniwersytet_Szczeci%C5%84ski',
	},
	{
		id: 4,
		image: 'assets/img/jasne-blonia.jpg',
		name: 'Plac Jasne Błonia im. Jana Pawła II',
		description:
			'Szeroki zieleniec, znajdujący się na północ od gmachu szczecińskiego Urzędu Miejskiego, ograniczony ulicami Michała Ogińskiego, Karola Szymanowskiego i Stanisława Moniuszki. Od...',
		link: 'https://pl.wikipedia.org/wiki/Jasne_B%C5%82onia',
	},
	{
		id: 5,
		image: 'assets/img/filharmonia.jpg',
		name: 'Filharmonia im. Mieczysława Karłowicza w Szczecinie',
		description:
			'Instytucja kultury w województwie zachodniopomorskim, współprowadzona przez Ministra Kultury i Dziedzictwa Narodowego od 2017 roku, mieszcząca się od 2014...',
		link: 'https://pl.wikipedia.org/wiki/Filharmonia_im._Mieczys%C5%82awa_Kar%C5%82owicza_w_Szczecinie',
	},
];

window.onload = () => {
	const buttonHolder = document.querySelector('#losuj');
	const imgHolder = document.querySelector('#lokalizacja-photo');
	const nameHolder = document.querySelector('#lokalizacja-nazwa');
	const descHolder = document.querySelector('#lokalizacja-opis');
	const linkHolder = document.querySelector('#lokalizacja-link');

	let currentLocation = 0;

	const getRandomLocation = () => {
		let randomNumber = Math.floor(Math.random() * 6);

		if (currentLocation === 5 && randomNumber === 5) {
			randomNumber = Math.floor(Math.random() * 6);
		}

		if (currentLocation === randomNumber) {
			randomNumber = Math.floor(Math.random() * 6);
		}

		if (currentLocation !== randomNumber) {
			imgHolder.src = locations[randomNumber].image;
			nameHolder.textContent = locations[randomNumber].name;
			descHolder.textContent = locations[randomNumber].description;
			linkHolder.href = locations[randomNumber].link;

			currentLocation = locations[randomNumber].id;
		}
	};

	buttonHolder.addEventListener('click', (e) => {
		e.preventDefault();
		getRandomLocation();
	});

	getRandomLocation();
};
