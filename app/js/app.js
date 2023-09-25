AOS.init({
  easing: 'ease-out-back',
  duration: 1000,

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

    console.log(width);
    console.log(cont);
    console.log(((width - cont) / 2));

    $('.header-block__left').css({'width': (width - cont) / 2, 'left': -(width - cont) / 2});

  });
});
