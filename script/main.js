$(document).ready(function() {
	window.onscroll = windowScrolled;
    	function windowScrolled() {
        if (window.pageYOffset >= $(window).height() && window.pageYOffset < $(window).height() + $("#about-page").height()) {
            $(".nav-button").css("font-weight", "lighter");
            $("#nav-about").css("font-weight", "bolder");
        } else if (window.pageYOffset >= $(window).height() + $("#about-page").height() && 
                   window.pageYOffset < $(window).height() + $("#about-page").height() + $("#experience").height()) {
            $(".nav-button").css("font-weight", "lighter");                 
            $("#nav-projects").css("font-weight", "bolder");
        } else {
        		$(".nav-button").css("font-weight", "lighter");
            $("#nav-writings").css("font-weight", "bolder");
            
        }
    }	
});
