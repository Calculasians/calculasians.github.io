$(document).ready(function() {
	window.onscroll = windowScrolled;
    	function windowScrolled() {
	if (window.pageYOffset <$(window).height() - 50) {
		$(".nav-button").css("font-weight", "lighter");
	} else if (window.pageYOffset >= $(window).height() - 50 && window.pageYOffset < $(window).height() + $("#about-page").height()) {
            	$(".nav-button").css("font-weight", "lighter");
            	$("#nav-about").css("font-weight", "bolder");
        } else if (window.pageYOffset >= $(window).height() + $("#about-page").height() && 
                   window.pageYOffset < $(window).height() + $("#about-page").height() + $("#experience").height()) {
            	$(".nav-button").css("font-weight", "lighter");                 
            	$("#nav-experience").css("font-weight", "bolder");
        } else if (window.pageYOffset >= $(window).height() + $("#about-page").height() + $("#experience").height() &&
		   window.pageYOffset < $(window).height() + $("#about-page").height() + $("#experience").height() + $("#projects").height()) {
	   	$(".nav-button").css("font-weight", "lighter");        
		$("#nav-projects").css("font-weight", "bolder");     
	} else if (window.pageYOffset >= $(window).height() + $("#about-page").height() + $("#experience").height() + $("#projects").height() &&
		   window.pageYOffset < $(window).height() + $("#about-page").height() + $("#experience").height() + $("#projects").height() + $("#hobbies").height()) {   
		$(".nav-button").css("font-weight", "lighter");     
		$("#nav-hobbies").css("font-weight", "bolder");     
	} else {
        	$(".nav-button").css("font-weight", "lighter");
            	$("#nav-writings").css("font-weight", "bolder");
        }
    }	
});
