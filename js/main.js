let mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".arrow",
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
  },
});

let menuBtn = document.querySelector(".menu-button");
let header = document.querySelector(".header");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("menu-button-active");
  header.classList.toggle("header-active");
});
