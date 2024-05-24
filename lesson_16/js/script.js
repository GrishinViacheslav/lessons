document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.menu-burger')) {
		document.documentElement.classList.toggle('menu-open');
	}
})