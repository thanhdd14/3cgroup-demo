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

$(function () {
    $(".tab-menu li").click(function () {
        var num = $(".tab-menu li").index(this);
        $(".tab-content .tab-content__item").removeClass('active');
        $(".tab-content .tab-content__item").eq(num).addClass('active');
        $(".tab-menu li").removeClass('active');
        $(this).addClass('active')
    });
});