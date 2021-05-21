const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    900: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    1260: {
      spaceBetween: 40,
      slidesPerView: 3,
    },
  },
});
