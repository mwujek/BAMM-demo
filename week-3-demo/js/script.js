
if($(window).width()>600){
  $('#videoContainer').prepend('<video id="bg-video" src="http://mattwujek.com/videoTest/river.ogv" autoplay="true"></video>');
}
//Hover over the navigation unordered element = push out list
$( document ).ready(function() {

  // var height = $( window ).height();
  var width = $( window ).width();
  if(width>600){
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
  }

//video script

  var windowNativeHeight = $(window).height();
  var windowNativeWidth = $(window).width();
  
  function scaleVideo(){
    //save window height and width
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var scale;
    
    //save video height and width
    var videoNativeHeight = $(video)[0].videoHeight;
    var videoNativeWidth = $(video)[0].videoWidth;
    
    //make scale factors with height and width
    var heightScaleFactor = windowHeight/videoNativeHeight;
    var widthScaleFactor = windowWidth/videoNativeWidth;
    
    //alert('height: '+heightScaleFactor+ ' width: ' +widthScaleFactor);
    
    //which is higher?
    if(heightScaleFactor<widthScaleFactor){
      scale = widthScaleFactor;
    }else{
      scale= heightScaleFactor;
    }
    
    var scaledVideoHeight = scale*videoNativeHeight;
    var scaledVideoWidth = scale*videoNativeWidth;

    video.height(scaledVideoHeight);
    video.width(scaledVideoWidth);

  }
  var video = $('video#bg-video');
  var bg = $('#section0');
  
  if(windowNativeWidth>600){

    video.on('loadedmetadata', scaleVideo);
    $(window).on('resize', scaleVideo);


  } else {
    video.attr({
     src: "",
     alt: "jQuery"
   });
    bg.addClass('background');
  } 





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