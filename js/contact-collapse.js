// Content form is collapsed by default
// 'click' is id the h2 header that is clicked on,
// 'expand' is the whole contact form that expands when 'click' is well, clicked.

$(document).ready(function() {
	// document.getElementById('expand').classList.toggle('expand-hide');
	document.getElementById('expand').style.maxHeight = '0px';
	document.getElementById('click').classList.toggle('collapsible-h2');
	document.getElementById('click').classList.toggle('collapsible-h2:hover');
});

$(document).ready(function() {
	var button = document.getElementById('click');
	button.addEventListener('click', function() {
		// document.getElementById('expand').classList.toggle('expand-hide');
		var toexpand = document.getElementById('expand');
		if (toexpand.style.maxHeight === '0px'){
			toexpand.style.maxHeight = toexpand.scrollHeight + 'px';
		} else {
			toexpand.style.maxHeight = '0';
		}
	});
});

