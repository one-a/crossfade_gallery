$(function(){
  var speed = '5000';
  var interval = '1500';

  $('.fadeGallery li').hide();
  $('.fadeGallery li:first-child').addClass('active').show();

  var count = $('.fadeGallery ul li').length;

  var fadeGallery = function () {
    var fadeGalleryAnimation = setTimeout(function() {
      if(count - 1 > ($('.active').index())) {
        $('.active').fadeOut().removeClass('active')
        .next().addClass('active').fadeIn(speed);
      } else {
        $('.active').fadeOut().removeClass('active');
        $('.fadeGallery li:first-child').addClass('active').fadeIn(speed);
      }
      fadeGallery();
    }, interval);
  }
  fadeGallery();

});
