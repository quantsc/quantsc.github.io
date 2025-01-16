jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $(window).height() - $(".navbar").height()) {
      $(".cardinal-back").css("background", "#342995");
    } else {
      $(".cardinal-back").css("background", "transparent");
    }
  });
});
