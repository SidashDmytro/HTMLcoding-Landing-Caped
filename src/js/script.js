document.addEventListener("DOMContentLoaded", function () {
	require('../js-additional/inc/lazyload')();
	const Event = require('../js-additional/inc/event').default;
	const Other = require('../js-additional/inc/other').default;

	let variable = "Item";
	console.log(variable);
	Event.event(".hamburger", () => {
		document.querySelector(".header").classList.toggle("header-mobile-menu-open");
	}, "all");
	Event.event("#scrollToTop", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});
	Event.event("body", (e) => {
	}, "all");
});

(d => {
	const hearts = document.querySelectorAll('.heart');
	const iconSearch = document.querySelector('.icon-search');
	const searchForm = document.querySelector('.search-form');
	const overlay = document.querySelector('.overlay');
	const burgerShow = document.querySelector('.icon-burger');
	const burgerClose = document.querySelector('.icon-burger-close');
	const explore = document.querySelector('.explore');

	hearts.forEach(heart => heart.addEventListener('click', function () {
		heart.classList.toggle('heart-active');
	}))

	iconSearch.addEventListener('click', () => {
		searchForm.style.display = 'block';
		overlay.style.display = 'block';
	});

	overlay.addEventListener('click', () => {
		searchForm.style.display = 'none';
		overlay.style.display = 'none';
	});

	burgerShow.addEventListener('click', () => {
		explore.style.display = 'block';
	});

	burgerClose.addEventListener('click', () => {
		explore.style.display = 'none';
	});

})(document)