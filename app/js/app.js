AOS.init({
  easing: 'ease-out-back',
  duration: 1000,

});

// speaker slider
var swiperSpeaker = new Swiper(".speakersSwiper", {
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-speaker",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    // when window width is >= 480px
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,

    }
  }
});

// speaker slider
var swiperSpeaker = new Swiper(".partnersSwiper", {
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-partners",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    // when window width is >= 480px
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,

    }
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
    pause: 4000,
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

console.log(headHeight);
    var width2 = (cont / 2);
    var widthVideo = (cont * 0.56);
    $('.banners-2 .banners-item .banner__content .container').css({'width': "calc("+width2+"px - 10px)"});
    $('#mainVideo iframe').prop('height', widthVideo+"px");

    if (width <= 1024) {
      var headHeight = $('.header-content').height();
      $('.header-slider').css('height', (headHeight + 20)+"px");
    } else {
      $('.header-slider').css('height', '');
    }


  });
});
