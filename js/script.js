$(document).ready(function () {
  // Навигация - текущая страница

  $(".header__list-item").click(function () {
    $(".header__list-item").removeClass("header__list-item--active");
    $(this).addClass("header__list-item--active");
    if ($("li.header__list-item.search")) {
      $("li.header__list-item.search").removeClass("header__list-item--active");
    }
  });

  $(".header__submenu-item").click(function () {
    $(".header__submenu-item").removeClass("header__submenu-item--active");
    $(this).addClass("header__submenu-item--active");
  });

  //Custom input[type="file"]

  $(".window-popup__file").on("change", function () {
    let file = this.files[0];
    $(this)
      .closest(".window-popup__form_file")
      .find(".window-popup__file-text")
      .html(file.name);
  });

  //FadeIn popup form

  $(".btn.popup").click(function () {
    $(".window").addClass("fade");
  });

  $(".window-popup__close").click(function (event) {
    $(".window").removeClass("fade");
  });

  // burger menu

  $(".menu-burger__header").click(function () {
    $(".menu-burger__header, ul.header__list").toggleClass("open-menu");
  });

  //initialize and settings banner slider

  $(".banner-slider").slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows:false,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe:false,
  });
});
