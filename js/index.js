
var  mn = $("nav"), abt = $("#about"), mns = "nav-scrolled", hdr = $('header').height(), navlinks = $("nav > a");

$(function(){      
    $('.special.cards .image').dimmer({
        on: 'hover'});
});

$(window).scroll(function () {
    if ($(this).scrollTop() > hdr + 60) {
        mn.addClass(mns);
        mn.removeClass("mw7");
        abt.addClass("nav-about");
    } else {
        mn.removeClass(mns);
        mn.addClass("mw7");
        abt.removeClass("nav-about");
    }
});