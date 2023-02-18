$(document).ready(function () {
  $(window)
    .resize(function () {
      // 데스크탑 스크롤이벤트
      if (window.innerWidth > 1024) {
        $(window).scroll(function () {
          const currentScrollValue = document.documentElement.scrollTop;

          if (currentScrollValue > 2400) {
            $(".scroll_down").css("opacity", 0);
          } else {
            $(".scroll_down").css("opacity", 1);
          }
        });
        // 태블릿 모바일 터치이벤트
      } else if (window.innerWidth <= 1024) {
        $("body").on("touchstart", function (e) {
          const currentTouchValue = e.originalEvent.touches[0].pageY;
          console.log(currentTouchValue);
          if (currentTouchValue > 1200) {
            $(".scroll_down").css("opacity", 0);
          } else if (currentTouchValue <= 1200) {
            $(".scroll_down").css("opacity", 1);
          }
        });
      }
    })
    .resize();
  // 리사이즈시 재실행
  $(".intro").show();
  setTimeout(introAnimation, 1200);
  function introAnimation() {
    $(".intro").fadeOut();
  }
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
  // slick , 새로고침시 0
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
