/*
Template Name: Code19 - Admin & Dashboard Template
Author: Code19
Website: https://Code19.com/
Contact: Code19@gmail.com
File: profile init js
*/

var swiper = new Swiper(".slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
