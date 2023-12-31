
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
  $(document).mouseup( function(e){ // событие клика по веб-документу
    var div = $( ".menu-dropdown.active" ); // тут указываем ID элемента
    if ( !div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
      div.removeClass('active'); // скрываем его
    }
  });


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

  // mobile menu open/close
  $(document).on('click', '.mobile-menu__btn', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(document).find('.header__menu').removeClass('active');
    } else {
      $(this).addClass('active');
      $(document).find('.header__menu').addClass('active');
    }
  });

  $(document).on('click', '.menu-dropdown .item-title', function(e) {
    e.preventDefault();
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
    } else {
      $('.menu-dropdown.active').removeClass('active');
      $(this).parent().addClass('active');
    }

  });

  //left side in header
  $(window).on('load resize', function() {
    var width = $(window).width(),
      cont = $('.container').width();

    var width2 = (cont / 2);
    var widthVideo = (cont * 0.56);
    $('#mainVideo iframe').prop('height', widthVideo+"px");

    if (width <= 1024) {
      var headHeight = $('.header-content').height();
      $('.header-slider').css('height', (headHeight)+"px");



    } else {
      $('.header-slider').css('height', '');
      $('.banners-2 .banners-item .banner__content .container').css({'width': "calc("+width2+"px - 10px)"});

    }


  });
});
