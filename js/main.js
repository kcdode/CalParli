var stickyHeight = null;
var navbarMargin = 0;
var marginAdded = false;

// Get trigger height and 'replacement' margin for sticky bar
document.addEventListener('DOMContentLoaded', function () {
	stickyHeight = document.getElementById("nav").offsetTop;
	navbarMargin = $('.navbar').outerHeight(true);
});


$(window).scroll(

	function () {

		var navContainer = $('.navbar');
		var scrolled = $(window).scrollTop();
		var scale = 300.0; // lower for faster blur, higher for slower
		if (scrolled < 1000) {
			opacityVal = (scrolled / scale);
			$('.blurred-bg').css('opacity', opacityVal);
		}


		if (window.pageYOffset > stickyHeight) {
			navContainer.addClass('sticky');
			// add margin only once
			if (!marginAdded) {
				$('.article').css('margin-top', '+=' + navbarMargin + 'px');
				marginAdded = true;
			}
		} else {
			navContainer.removeClass('sticky');
			if (marginAdded) {
				$('.article').css('margin-top', '-=' + navbarMargin + 'px');
				marginAdded = false;
			}
		}
	}
);

