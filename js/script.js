jQuery('document').ready(function () {
	$('.header__burger').click(function () {
		$('.header__burger, .header__menu, body, .header__bottom').toggleClass('active');
	})
	$('.poppup-button').click(function (e) {
		$(this).toggleClass('active');
	})
	$('.explore__location-button').click(function (e) {
		$('.explore__location').toggleClass('active');
	})
	$('.explore__poppup li').click(function (e) {
		//console.log('test');
		text = this.textContent;
		$('.explore__location-text').html(text);
		$('.explore__location').toggleClass('active');

		//console.log(text);

	})
})

