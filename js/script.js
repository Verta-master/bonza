jQuery(function($) {
	"use strict";

//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
})

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".arrow-top").fadeIn();
    $(".header").addClass("header--scroll");
  } else {
    $(".arrow-top").fadeOut();
    $(".header").removeClass("header--scroll");
  };
});

$(".arrow-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});

});