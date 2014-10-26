/*jshint devel:true */

var width = viewportSize.getWidth();
var height = viewportSize.getHeight();
console.log("width: "+width+"...height: " +height);

// Waypoints
$(document).ready(function(){

	function changeNavHighlight(e){
	var whichSection = e.attr('nav-section'); //string with location
	var $navElements = $('nav li a');
	console.log(whichSection);
	$navElements.removeClass('active-nav-item');
	$('nav .' + whichSection + '').addClass('active-nav-item');
	
	//$('nav .' + whichSection + '').addClass('active-nav-item')();
	//return false;
}

$('.waypoint-marker').waypoint(function() {
  var element = $(this); // The latest section header that hit the top of the viewport
  changeNavHighlight(element);

});

});

// Navigation

var $navButton = $('.nav-toggle'),
$allContent = $('.container'),
$darkFilter = $('.blackout-div'),
$nav = $('nav'),
delayTime = 500,
activeNav = false;

function navBtnToggle(direction){
	var navWidth = $nav.outerWidth();

	if(direction === 'becoming-active'){


		setTimeout(function(){
			//$navButton.addClass('corner-position');
			$navButton.html('close');
			//$navButton.fadeIn();
		},delayTime/2);

		setTimeout(function(){
			//$navButton.addClass('exit-menu');
		},delayTime*2);
	} else{
		//$navButton.addClass('offset-position');
	}

}

function pushContent(direction){
	var navWidth = $nav.width();
	var navBtnWidth = $navButton.width();
	console.log(navWidth);
	if( direction === 'left'){
		$allContent.css(direction,navWidth);
		$nav.css('left',0);
		navBtnToggle('becoming-active');
	}else{
		$allContent.css('left',0);
		$nav.css('left',(navWidth)*(-2));
		navBtnToggle('becoming-normal');
	}

}



function toggleNav(){

	if(activeNav === false){

	pushContent('left'); //push all of the contents to the right
	$darkFilter.delay(delayTime).fadeIn();
	return activeNav = true;
}else{
	$darkFilter.fadeOut();
	setTimeout(function(){
		$navButton.removeClass('active-nav-button');
		$navButton.html('menu');
		pushContent('right'); //return contents to original location
	},delayTime);
	return activeNav = false;
}
}


$navButton.on('click',function(){
	toggleNav();

});


// Window Resize
function verticalAlign(){
	var $container = $('.vertical-align').parent();
	//var $content = $('.vertical-align');
	$('.vertical-align').each(function(){
		$(this).css("top", ($container.outerHeight()-$(this).outerHeight())/2);
	});
	
}

$( document ).ready(function() {
	$('.full-page').css('height', height);
	verticalAlign();
});

$(window).resize(function() {


	$('.full-page').css('height', height);
	console.log(window.innerHeight);
	verticalAlign();

});

// // Video
// if($(window).width()>600){
//   $('#home').prepend('<video id="bg-video" src="http://mattwujek.com/videoTest/river.ogv" autoplay muted></video>');
// }

// jQuery(document).ready(function(){
//     var windowNativeHeight = $(window).height(),
//     	windowNativeWidth = $(window).width();

//   function scaleVideo(){
//     //save window height and width
//     var windowHeight = $(window).height();
//     var windowWidth = $(window).width();
//     var scale;

//     //save video height and width
//     var videoNativeHeight = $(video)[0].videoHeight;
//     var videoNativeWidth = $(video)[0].videoWidth;

//     //make scale factors with height and width
//     var heightScaleFactor = windowHeight/videoNativeHeight;
//     var widthScaleFactor = windowWidth/videoNativeWidth;

//     //which is higher?
//     if(heightScaleFactor<widthScaleFactor){
//       scale = widthScaleFactor;
//     }else{
//       scale= heightScaleFactor;
//     }

//     var scaledVideoHeight = scale*videoNativeHeight;
//     var scaledVideoWidth = scale*videoNativeWidth;

//     video.height(scaledVideoHeight);
//     video.width(scaledVideoWidth);
//   }


//   var video = $('video#bg-video'),
//   bg = $('#home');
  
//   if(windowNativeWidth>600){
   
//   video.on('loadedmetadata', scaleVideo);
//   $(window).on('resize', scaleVideo);
  
  
//   } else {
//     video.attr({
//        src: "",
//        alt: "jQuery"
//     });
//     bg.addClass('background');
//   } 
// });

// Message to B2b partners
var messageHeading= 
['It should be easy to bring great music to your customers…',
'…but competing interests in the music industry make it hard.',
'BAMM.tv makes music licensing easy.'
];

var messageInfo= 
['You have an idea of how to enhance your services and build stronger customer relationships through music. It should be easy to find perfectly reasonable business partners that are interested in making a deal, right?',
'If you’re working with major labels, the complexity of deal structures, steep revenue requirements, and obtuse legal restrictions are so burdensome that many would-be partners lose their appetite for licensing music.',
'Operating on the principle that a deal is only “good” if it is fair to all parties, BAMM.tv removes the barriers to making smart transactions in the new music economy by supporting business models that are equitable to all parties – including the artist.'
];

var $contentBox = $('.b2b-message');
var $messageHeading =$('.b2b-message > h1');
var $messageInfo = $('.b2b-message > p');
var $allButtons = $('.btn-list > li >');

function changeMessageText(slideIndex){
	$contentBox.fadeOut();
	setTimeout(function(){
		$messageHeading.html(messageHeading[slideIndex]);
		$messageInfo.html(messageInfo[slideIndex]);
		$contentBox.fadeIn();
	},500);
	console.log(slideIndex);
}

$(document).ready(function(){
	$('.btn-list >li > a').on('click',function(e){
		e.preventDefault();
		var $btn = $(this);
		$allButtons.removeClass('active-btn-state');
		$btn.addClass('active-btn-state');
		var index = $(this).data('index');
		changeMessageText(index);
	});



});


//smooth scrolling

$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
		|| location.hostname == this.hostname) {

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