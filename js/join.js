var index = 1;

function move(n) {
	console.log("test");
	show(index += n);
}

function show(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	if (n > slides.length) {index = 1}
	if (n < 1) {index = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[index-1].style.display = "inline-block";
}
