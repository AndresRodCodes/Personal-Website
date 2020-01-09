var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs((slideIndex += n));
}

function currentDiv(n) {
	showDivs((slideIndex = n));
}

function showDivs(n) {
	let i;
	let x = document.getElementsByClassName('code-slides');
	if (n > x.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	x[slideIndex - 1].style.display = 'block';
}

var webSlideIndex = 1;
showWebDivs(webSlideIndex);

function plusWebDivs(n) {
	showWebDivs((webSlideIndex += n));
}

function currentWebDiv(n) {
	showWebDivs((webSlideIndex = n));
}

function showWebDivs(n) {
	let i;
	let x = document.getElementsByClassName('web-code-slides');
	if (n > x.length) {
		webSlideIndex = 1;
	}
	if (n < 1) {
		webSlideIndex = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	x[webSlideIndex - 1].style.display = 'block';
}
