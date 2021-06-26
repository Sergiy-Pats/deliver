jQuery('document').ready(function () {
	$('.header__burger').click(function () {
		$('.header__burger, .header__menu, body, .header__bottom').toggleClass('active');
	})
	$('.poppup-button').click(function (e) {
		$(this).toggleClass('active');
	})
})

