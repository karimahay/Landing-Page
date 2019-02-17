
// Fleche pour retourner en haut de la page
ScrollToTop=function() {
  var s = $(window).scrollTop();
  if (s > 250) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
 
  $('.scrollup').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
  });
}


// Effet de la remonté de page au ralentit 
 $(window).scroll(function() {
  ScrollToTop();
  StopAnimation();

});

// Menu deroulant 
  $( document ).ready(function() {

          $( ".cross" ).hide();
          $( ".menu" ).hide();
          $( ".hamburger" ).click(function() {
                $( ".menu" ).slideToggle( "fast", function() {
                $( ".hamburger" ).hide();
                $( ".cross" ).show();
        });
    });

  $( ".cross" ).click(function() {
          $( ".menu" ).slideToggle( "fast", function() {
          $( ".cross" ).hide();
          $( ".hamburger" ).show();
          });
      });

});