$(document).ready(function(){

  // TODO - make this ajax so the header nav doesnt flash
  $(".next-project, .prev-project").click(function(evt){
    evt.preventDefault();
    fadePageOut($(this).attr('href'));
  });
  fadePageIn();

});

function fadePageOut(targetHref){
  $("body").fadeOut(100, function(){
    window.location.href = targetHref;
  });
}

function fadePageIn(){
  $("body").fadeIn(200);
}
