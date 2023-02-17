$(document).ready(function () {
  $(".intro").show();
  setTimeout(introAnimation, 1200);
  function introAnimation() {
    $(".intro").fadeOut();
  }
  $("body").on("mousewheel", function () {
    const currentScrollValue = document.documentElement.scrollTop;

    if (currentScrollValue > 2400) {
      $(".scroll_down").css("opacity", 0);
    } else {
      $(".scroll_down").css("opacity", 1);
    }

    console.log(currentScrollValue);
  });
  // animate.css를 aniview에 등록
  $(".aniview").AniView({
    animateClass: "animate__animated",
  });
  const options = {
    animateClass: "animated", // for v3 or 'animate__animated' for v4
    animateThreshold: 100,
    scrollPollInterval: 20,
  };
  $(".aniview").AniView(options);
  $(".footer_logo").on("click", function () {
    window.scrollTo(0, 0);
    $(".scroll_down").css("opacity", 1);
  });
  setTimeout(function () {
    $(".web").slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      prevArrow: $(".prevArrow"),
      nextArrow: $(".nextArrow"),
      arrows: true,
    });
    window.scrollTo(0, 0);
  }, 200);
});
