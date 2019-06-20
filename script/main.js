window.onscroll = windowScrolled;
    function windowScrolled() {
        if (window.pageYOffset >= $(window).height() && window.pageYOffset < $(window).height() + $("#about-page").height()) {
            $("#nav-about").css("font-weight", "bolder");
        } else if (window.pageYOffset >= $(window).height() + $("#about-page").height() && 
                   window.pageYOffset < $(window).height() + $("#about-page").height() + $("#experience").height()) {
            $("#nav-projects").css("font-weight", "bolder");
        } else {
            $("#nav-writings").css("font-weight", "bolder");
        }
    }
