$(document).ready(function(){

  bindProjectNavArrows();
  fadePageIn();

});

function bindProjectNavArrows(){
  $(".next-project, .prev-project").click(function(evt){
    evt.preventDefault();
    fadePageOut($(this).attr('href'));
  });
}

function fadePageOut(targetHref){
  $("#main").fadeOut(200, function(){
    $( "#main" ).load( targetHref + " #container #main", function(response, status, xhr){
      bindProjectNavArrows();
      document.title = $(response).filter("title").text();
      window.history.pushState("", "", targetHref);
    });
    $("#main").fadeIn(200);
  });
}

function fadePageIn(){
  $("body").fadeIn(200);
}
