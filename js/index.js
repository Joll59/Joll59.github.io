var  mn = $("nav"), abt = $("#about"), mns = "nav-scrolled", hdr = $('header').height(), navlinks = $("nav > a");

$(window).scroll(function () {
    if ($(this).scrollTop() > hdr + 60) {
        mn.addClass(mns);
        mn.removeClass("mw7");
        abt.addClass("nav-about");
//        navlinks.removeClass("black-80");
//        navlinks.addClass("white-80");
    } else {
        mn.removeClass(mns);
        mn.addClass("mw7");
        abt.removeClass("nav-about");
//        navlinks.removeClass("white-80");
//        navlinks.addClass("black-80");
    }
});
