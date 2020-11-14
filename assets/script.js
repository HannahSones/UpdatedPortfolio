$(document).ready(function () {

    // initiates carousel scrolling
    $('.carousel').carousel({
        interval: 3000
      });


      // closes menu bar on click
      $(".nav-link").click(function () {
        $("#navbarToggleExternalContent").removeClass("show");
        });

});