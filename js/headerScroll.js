window.onload = function() {
    scrollFunction();
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop >= 70 || document.documentElement.scrollTop >= 70) {
        $("header.nav").addClass("navbar-scrolled");
        $(".mobile-drop-menu").addClass("navbar-scrolled");
        $("header.nav .navigacja .button-top").addClass("hide-me");
        $("header.nav .navigacja .button-main").removeClass("hide-me");
      } else {
        $("header.nav").removeClass("navbar-scrolled");
        $(".mobile-drop-menu").removeClass("navbar-scrolled");
        $("header.nav .navigacja .button-top").removeClass("hide-me");
        $("header.nav .navigacja .button-main").addClass("hide-me");
      }
      if (document.body.scrollTop >= 1000 || document.documentElement.scrollTop >= 1000) {
        $(".form-fly-button.popup-open-btn").removeClass("hidden");
      }
    }
};