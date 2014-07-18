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

//Hover over the gears icon = animate color


$( "li" ).hover(
  function() {
    $( '#inner-bigGear' ).attr("fill", "#ccc");
    $( '#inner-smallGear' ).attr("fill", "#aaa");
    $( '.hub-icon' ).addClass("spin");

  }, function() {
    $( '#inner-bigGear').attr("fill", "#fff");
    $( '#inner-smallGear' ).attr("fill", "#fff");
    $( '#gears' ).removeClass("spin");
  });

