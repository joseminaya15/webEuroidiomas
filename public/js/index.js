$(window).scroll(function(e){
  parallax();
});
//PARALLAX FUNCTION
function parallax(){
  var scrolled = $(window).scrollTop();
  $('#principal').find('.item').find('.imagen').css('top',-(scrolled*0.1)+'px');
}
$(document).ready(function(){
	playfunc();
    $('#view-video').click(function(){
		 $(this).hide();
		 $('video')[0].setAttribute("controls","controls")
    });
    $('.owl-nav').find('.owl-prev').text('');
    $('.owl-nav').find('.owl-next').text('');
    $('.owl-nav').find('.owl-prev').append('<i class="mdi mdi-keyboard_arrow_left"></i>');
    $('.owl-nav').find('.owl-next').append('<i class="mdi mdi-keyboard_arrow_right"></i>');
});
function playfunc(){
	document.getElementById('video-home').play();
}
$('#principal .owl-carousel').owlCarousel({
	lazyLoad : true,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	responsive : {
		0 : {
			items : 1
		}
	},
	navigation : false,
	nav : false,
	loop : true,
	autoplay : true,
	autoplayTimeout : 5000
});
$('#better .owl-carousel').owlCarousel({
	lazyLoad : true,
	responsive : {
		0 : {
			items : 1
		},
		480:{
			items : 2
		},
		1150:{
			items : 3
		}
	},
	navigation : false,
	nav : true,
	loop : false,
	autoplay : false,
	autoplayTimeout : 5000
});
$('#costo .owl-carousel').owlCarousel({
	lazyLoad : true,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	responsive : {
		0 : {
			items : 1
		}
	},
	navigation : false,
	nav : false,
	loop : true,
	autoplay : true,
	autoplayTimeout : 7000
});
var $win = $(window);
$win.scroll(function() {
	if ($win.scrollTop() > 45) {
		$("nav").addClass("navbarcolor");
	} else {
		$("nav").removeClass("navbarcolor");
	}
});
var $win1 = $(window);
$win1.scroll(function() {
	if ($win1.scrollTop() > 150) {
		$(".mdl-card-informacion").addClass('position-fixed');
	} else {
		$(".mdl-card-informacion").removeClass('position-fixed');
	}
});

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


$('a.link-section[href^="#"]').click(function(e) {
 	var target = $(this).attr('href');
 	var strip = target.slice(1);
 	var anchor = $("section[id='" + strip + "']");
 	e.preventDefault();
 	y = (anchor.offset() || {
 		"top" : NaN
 	}).top;
 	if(isMobile.any()){
 		$('html, body').animate({
	 		scrollTop : (y - 40)
	 	}, 'slow');
 	}else{
 		$('html, body').animate({
	 		scrollTop : (y - 120)
	 	}, 'slow');
 	}
});

function resizeContent() {
    var top = $( window ).height();
	$("body").css('height', top);
}
