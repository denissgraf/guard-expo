AOS.init({
  easing: 'ease-out-back',
  duration: 1000,

});

// speaker slider
var swiperSpeaker = new Swiper(".speakersSwiper", {
  slidesPerView: 4,
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-speaker",
    clickable: true,
  }
});

// speaker slider
var swiperSpeaker = new Swiper(".partnersSwiper", {
  slidesPerView: 5,
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-partners",
    clickable: true,
  }
});


$(document).ready(function() {


  setTimeout (function(){
    var preloader = $(document).find('.preloader');
    preloader.addClass('hide');
  }, 5000);


  // header slider
  $("#lightSliderHeader").lightSlider({
    item: 1,
    slideMove: 1,
    mode: "fade",
    auto: true,
    loop: true,
    controls: false,
    cssEasing: 'ease',
    easing: 'ease'
  });




  //left side in header
  $(window).on('load resize', function() {
    var width = $(window).width(),
      cont = $('.container').width();


    var width2 = (cont / 2);
    var widthVideo = (cont * 0.56);
    $('.header-block__left').css({'width': (width - cont) / 2, 'left': -(width - cont) / 2});
    $('.banners-2 .banners-item .banner__content .container').css({'width': "calc("+width2+"px - 10px)"});
    $('#mainVideo iframe').prop('height', widthVideo+"px");
  });
});
