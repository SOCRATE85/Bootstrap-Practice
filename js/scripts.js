$(function () {
  $(".carousel").carousel({ interval: 2000 });
  $("#carouselButtonAction").click(function () {
    console.log("Hiii");
    if ($("#carouselButtonAction").children("i").hasClass("fa-pause")) {
      console.log("1");
      $(".carousel").carousel("pause");
      $("#carouselButtonAction").children("i").removeClass("fa-pause");
      $("#carouselButtonAction").children("i").addClass("fa-play");
    } else {
      console.log("2");
      $(".carousel").carousel("cycle");
      $("#carouselButtonAction").children("i").removeClass("fa-play");
      $("#carouselButtonAction").children("i").addClass("fa-pause");
    }
  });

  $("#reserveButton").on("click", function () {
    $("#reserveModal").modal("show");
  });

  $("#loginButton").on("click", function () {
    $("#loginModal").modal("show");
  });
});
