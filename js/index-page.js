$(document).ready(() => {
  /*
   * FadeIn Text
   * */
  $("main .banner h2 i").each(function () {
    setTimeout(() => {
      $(this).animate({ opacity: 1 });
    }, Math.floor(Math.random() * 1000));
  });

  /*
   * Products Slider
   * */
  const $productSlider = $(".products .card-slider .card-slider__slides");
  const $productSliderPrevBtn = $(
    ".products .card-slider .card-slider__nav-prev"
  );
  const $productSliderNextBtn = $(
    ".products .card-slider .card-slider__nav-next"
  );

  $productSlider.slick({
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $productSliderPrevBtn,
    nextArrow: $productSliderNextBtn,
    responsive: [
      {
        breakpoint: Breakpoints.pc,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: Breakpoints.pad,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: Breakpoints.mobile,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  /*
   * Feedback Slider
   * */
  const $feedbackSlider = $(".feedback .card-slider .card-slider__slides");
  const $feedbackSliderPrevBtn = $(".feedback .card-slider__nav-prev");
  const $feedbackSliderNextBtn = $(".feedback .card-slider__nav-next");

  $feedbackSlider.slick({
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $feedbackSliderPrevBtn,
    nextArrow: $feedbackSliderNextBtn,
    responsive: [
      {
        breakpoint: Breakpoints.pc,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: Breakpoints.pad,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: Breakpoints.mobile,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});
