// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import Swiper styles
import "swiper/swiper-bundle.css";

// Swiper carousel - used for customers section
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
