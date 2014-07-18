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



// EACH FUNCTION

$("nav li").each(function() {
  var currentSVG = $(this).find("path");
  $(this).hover(
    function() {
      $(this).css({
        "color":"#fff"    
      });
      $(currentSVG).attr({
        "fill":"#fff"      
      });



    }, function() {
      $( this).css({
        "color":"#848484"    
      });
        $(currentSVG).attr({
        "fill":"#848484"      
      });

    });
});
