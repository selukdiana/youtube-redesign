const sliderPrevBtnArr = document.querySelectorAll(".slider__btn-left");
const sliderNextBtnArr = document.querySelectorAll(".slider__btn-right");

const handleScroll = (btn, direction) => {
  const slider = btn.closest(".slider").querySelector(".slider__container");
  if (!slider) return;

  const slides = [...slider.querySelectorAll(".slider__item")];
  const currentScroll = slider.scrollLeft;

  let targetSlide;
  if (direction === "next") {
    targetSlide = slides.find((slide) => slide.offsetLeft > currentScroll);
  } else if (direction === "prev") {
    targetSlide = slides
      .reverse()
      .find((slide) => slide.offsetLeft < currentScroll);
  }

  const scrollOffset = !targetSlide
    ? 0
    : targetSlide.offsetLeft - currentScroll;
  slider.scrollBy({
    left: scrollOffset,
    behavior: "smooth",
  });
};

sliderNextBtnArr.forEach((nextBtn) => {
  nextBtn.addEventListener("click", () => handleScroll(nextBtn, "next"));
});

sliderPrevBtnArr.forEach((prevBtn) => {
  prevBtn.addEventListener("click", () => handleScroll(prevBtn, "prev"));
});
