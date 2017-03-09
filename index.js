var  mn = $("nav");
    abt= $("#about")
    mns = "nav-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr + 64 ) {
    mn.addClass(mns);
    mn.removeClass("mw7");
    abt.addClass("about");
  } else {
    mn.removeClass(mns);
    mn.addClass("mw7")
    abt.removeClass("about");
  }
});
