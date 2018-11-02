jQuery(function($) {
	"use strict";

//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu_list').slideToggle();
});

if (window.innerWidth < 1022) {
  $('.menu__link').click(function(e) {
    e.preventDefault();
    $(this).next().slideToggle();
  });
};

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