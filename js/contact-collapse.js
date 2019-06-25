// Content form is collapsed by default

$(document).ready(function() {
	document.getElementById('expand').classList.toggle('expand-hide');
	document.getElementById('click').classList.toggle('collapsible-h2');
	document.getElementById('click').classList.toggle('collapsible-h2:hover');


});

$(document).ready(function() {
	var acc = document.getElementById('click');
	acc.addEventListener('click', function() {
		document.getElementById('expand').classList.toggle('expand-hide');
	});
});

