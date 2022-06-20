// navMenu的js--Start
const navButton = document.querySelector(".nav_btn");
const navMenu = document.querySelector(".nav_menu");

navButton.addEventListener("click", function () {
  navButton.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// navMenu的js--End

//go-top按鈕
$("document").ready(function () {
  function showBtnCondition() {
    if ($(this).scrollTop() > 1500) {
      $(".go-top").fadeIn();
    } else {
      $(".go-top").fadeOut();
    }
  }
  $(window).scroll(showBtnCondition);
  //回到頂端按鈕-點擊之後用1秒的速度往上滑動
  $(".go-top").click(function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
