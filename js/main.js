$(window).scroll(
	function () {
		var scrolled = $(window).scrollTop();
		var scale = 25.0; // lower for faster blur, higher for slower

		// blurred by increments since continuous blur is resource-intensive
		if (scrolled < $(window).height() && scrolled%4 === 0) {
			$('.bg').css(
				{filter: "blur(" + (scrolled/scale) + "px )"});
		}
	}
);

function SubmitFormData() {

	var name = $("#name").val();
	var email = $("#email").val();
	var message = $("#message").val();

	if (valForm(name, email, message)) {
		$.post("js/mail.php", {name: name, email: email, message: message},
			function (data) {
				$('#results').html(data);
				$('#myForm')[0].reset();
			});
		alert('Thank you! We\'ll be in contact shortly. Please click \'OK\' to finish submitting. ');
	} else {
		alert('Form validation failed! Please try again');
	}
}

function valForm(name, email, message) {
	var re = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
	return re.test(String(email).toLowerCase())
		&& name.length > 0 && message.length > 0;
}


