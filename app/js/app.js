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


  // speaker slider
  $("#lightSliderSpeakers").lightSlider({
    onSliderLoad: function (el) {
      var maxHeight = 0,
        container = $(el),
        children = container.children();
      children.each(function () {
        var childHeight = $(this).height();
        if (childHeight > maxHeight) {
          maxHeight = childHeight;
        }
      });
      container.height(maxHeight);
    },
    item: 4,
    slideMove: 1,
    mode: "slide",
    auto: false,
    loop: true,
    controls: true,
    cssEasing: 'ease',
    easing: 'ease',
    slideMargin: 30,
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
