//Hover over the navigation unordered element = push out list

$( "nav" ).hover(
  function() {
    // $( '#inner-bigGear' ).attr("fill", "#ccc");
    // $( '#inner-smallGear' ).attr("fill", "#aaa");
    $("nav").addClass("moveOut");
    $('nav li span').css( "margin-left", "15px" );

  }, function() {
    // $( '#inner-bigGear').attr("fill", "#fff");
    // $( '#inner-smallGear' ).attr("fill", "#fff");
    $("nav").removeClass("moveOut");
    $('nav li span').css( "margin-left", "55px" );
  });







// Smooth Scrolling


$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {

      var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});