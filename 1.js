$(document).ready(function() {
	$('.btn-top').click(function(event) {
		/* go to top */
		event.preventDefault();
		$('html, body').animate({scrollTop:0},1000);
	});
	$('.btn-menu').click(function(event) {
		/* button menu click */
		$('.menuleft').toggleClass('menuleft-show');
		$('.btn-menu i').toggleClass('fa-bars fa-times');
	});
	$('.home-m').click(function(event) {
		/* Act on the event */
		$('html, body').animate({scrollTop:0},1000);
		$('.menuleft').removeClass('menuleft-show');
	});
	$('.about-m').click(function(event) {
		/* Act on the event */
		$('html, body').animate({scrollTop: $('.about').offset().top},1000);
		$('.menuleft').removeClass('menuleft-show');
	});
	$('.services-m').click(function(event) {
		/* Act on the event */
		$('html, body').animate({scrollTop: $('.services').offset().top},1000);
		$('.menuleft').removeClass('menuleft-show');
	});
	$('.portfolio-m').click(function(event) {
		/* Act on the event */
		$('html, body').animate({scrollTop: $('.portfolio2').offset().top},1000);
		$('.menuleft').removeClass('menuleft-show');
	});
});
