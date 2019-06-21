$(document).ready(function() {
	window.onscroll = windowScrolled;
    	function windowScrolled() {
	if (window.pageYOffset < $(window).height() - 70) {
		$(".nav-button").css("font-weight", "lighter");
		$(".nav-button").css("margin-left", "0px");
	} else if (window.pageYOffset >= $(window).height() - 70 && window.pageYOffset < $(window).height() + $("#about-page").height() - 70) {
            	$(".nav-button").css("font-weight", "lighter");
		$(".nav-button").css("margin-left", "0px");
            	$("#nav-about").css("font-weight", "bolder");
		$("#nav-about").css("margin-left", "6px");
        } else if (window.pageYOffset >= $(window).height() + $("#about-page").height() - 70 && 
                   window.pageYOffset < $(window).height() + $("#about-page").height() + $("#experience").height()) {
            	$(".nav-button").css("font-weight", "lighter");   
		$(".nav-button").css("margin-left", "0px");
            	$("#nav-experience").css("font-weight", "bolder");
		$("#nav-experience").css("margin-left", "6px");
        } else if (window.pageYOffset >= $(window).height() + $("#about-page").height() + $("#experience").height() &&
		   window.pageYOffset < $(window).height() + $("#about-page").height() + $("#experience").height() + $("#projects").height()) {
	   	$(".nav-button").css("font-weight", "lighter");    
		$(".nav-button").css("margin-left", "0px");
		$("#nav-projects").css("font-weight", "bolder");    
		$("#nav-projects").css("margin-left", "6px");
	} else if (window.pageYOffset >= $(window).height() + $("#about-page").height() + $("#experience").height() + $("#projects").height() &&
		   window.pageYOffset < $(window).height() + $("#about-page").height() + $("#experience").height() + $("#projects").height() + $("#hobbies").height()) {   
		$(".nav-button").css("font-weight", "lighter");   
		$(".nav-button").css("margin-left", "0px");
		$("#nav-hobbies").css("font-weight", "bolder");   
		$("#nav-hobbies").css("margin-left", "6px");
	} else {
        	$(".nav-button").css("font-weight", "lighter");
		$(".nav-button").css("margin-left", "0px");
            	$("#nav-writings").css("font-weight", "bolder");
		$("#nav-writings").css("margin-left", "6px");
        }
    }	
});
