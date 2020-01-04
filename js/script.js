const navToggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const cards = document.querySelectorAll('.card');
const home = document.querySelector('#home');
const i1 = document.querySelector('.i1');
const i2 = document.querySelector('.i2');
const i3 = document.querySelector('.i3');
const i4 = document.querySelector('.i4');
const b1 = document.querySelector('.bar1');
const b2 = document.querySelector('.bar2');
const b3 = document.querySelector('.bar3');
const b4 = document.querySelector('.bar4');
const thresh = 0.8;

//open nav
if (navToggle)
	navToggle.addEventListener('click', () => {
		document.body.classList.toggle('nav-open');
	});

//show description for cards
cards.forEach((card) => {
	card.addEventListener('click', () => {
		card.classList.toggle('card-show');
	});
});

//toggle navbar background
const headerObserverOptions = {
	threshold : thresh
};

const headerObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.intersectionRatio < thresh) {
			nav.classList.add('nav-scrolled');
		}
		else {
			nav.classList.remove('nav-scrolled');
		}
	});
}, headerObserverOptions);

headerObserver.observe(home);

//toggle active slideshow button
const i1ObserverOptions = {
	threshold : thresh
};

const i1Observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > thresh) {
			b1.classList.add('active');
		}
		else {
			b1.classList.remove('active');
		}
	});
}, i1ObserverOptions);

i1Observer.observe(i1);

const i2ObserverOptions = {
	threshold : thresh
};

const i2Observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > thresh) {
			b2.classList.add('active');
		}
		else {
			b2.classList.remove('active');
		}
	});
}, i2ObserverOptions);

i2Observer.observe(i2);

const i3ObserverOptions = {
	threshold : thresh
};

const i3Observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > thresh) {
			b3.classList.add('active');
		}
		else {
			b3.classList.remove('active');
		}
	});
}, i3ObserverOptions);

i3Observer.observe(i3);

const i4ObserverOptions = {
	threshold : thresh
};

const i4Observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > thresh) {
			b4.classList.add('active');
		}
		else {
			b4.classList.remove('active');
		}
	});
}, i4ObserverOptions);

i4Observer.observe(i4);
