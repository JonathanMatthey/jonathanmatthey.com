$(document).ready(function(){
  // resizeProjectThumbs();
  $(window).resize(function(){
    // resizeProjectThumbs();
  });
});

var thumbAspectRatio = 602 / 401;

function resizeProjectThumbs(){
  var windowWidth = $(window).width();
  var newThumbWidth = (windowWidth - 130)/3;
  var newThumHeight = newThumbWidth / thumbAspectRatio;
  $(".projects li").css('width', newThumbWidth);
  $(".projects li").css('height', newThumHeight);
  $(".projects").css('width', windowWidth);
}