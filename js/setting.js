//menu header
$('.js-mobile').on('click', function(){
	$(this).toggleClass("js-mobile--close");
	$("html").toggleClass("js-locked");
	// $(".nav-menu").slideToggle();
	// e.preventDefault();
	$(".header-nav").fadeToggle();
});
$('.header-language__curent').on('click', function(){
	$(this).next(".header-language__list").slideToggle();
});
$('.header-nav__sub').on('click', function(){
	$(this).toggleClass("active");
	$(this).next(".header-nav__submenu").slideToggle();
});
$('.header-search__open').on('click', function(){
	$(".header-search--custom").addClass("active");
	$(".js-mobile").removeClass("js-mobile--close");
	$(".header-nav").fadeOut();
});
$('.header-search__close').on('click', function(){
	$(".header-search--custom").removeClass("active");
});
$('.footer-ct__ttl').on('click', function(){
	$(this).toggleClass("active");
	$(this).next("ul").slideToggle();
});
$(".js-about-list").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 2000,
	infinite: true,
	responsive: [
		{
			breakpoint: 835,
			settings: {
				slidesToShow: 1,
				centerMode: true,
			}
		}
	]
});


$(".js-slider-intro").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	autoplay: false,
	autoplaySpeed: 2000,
	infinite: true,
});

$(".js-gallery").slick({
	slidesPerRow: 4,
	rows: 2,
	slidesToScroll: 1,
	dots: true,
	autoplay: false,
	autoplaySpeed: 2000,
	infinite: true,
	responsive: [
		{
			breakpoint: 641,
			settings: {
				slidesPerRow: 2,
				rows: 4,
			}
		}
	]
});


$('.js-show-form').click(function (e) {
	e.preventDefault();
	$(".recruitment-form").slideToggle();
})


$('.recruitment-form__btn').click(function (e) {
	e.preventDefault();
	$('.modal-complete').addClass('is-show');
	$('body').addClass('bg-overlay');
})

$('.js-close').click(function () {
	$(this).closest('.modal-complete').removeClass('is-show');
	$('body').removeClass('bg-overlay');
})


$(document).on('change', 'input[type="file"]', function() {
	var name = $(this).attr("name");
	var fileName = $(this)[0].files[0].name;
	$('input[name="name'+name+'"]').val(fileName);
	$(this).parent().append("<span class='file-name' id='" + name + "'>" + fileName + "</span>");
	$('.recruitment-form__file-note').addClass('file-added');
});



$(function () {
	$(".tab-menu li").click(function () {
		var num = $(".tab-menu li").index(this);
		$(".tab-content .tab-content__item").removeClass('active');
		$(".tab-content .tab-content__item").eq(num).addClass('active');
		$(".tab-menu li").removeClass('active');
		$(this).addClass('active')
	});
});
