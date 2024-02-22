import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

const swiperExplore = new Swiper('.explore__slider', {
  slidesPerView: 1,
  speed: 500,
  effect: 'fade',
  autoplay: {
    delay: 200,
  },
  modules: [Navigation, Scrollbar, Pagination, EffectFade],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.explore__slider .btn--next',
    prevEl: '.explore__slider .btn--prev',
  },
  pagination: {
    el: '.explore__slider .swiper-pagination',
    clickable: true,
  },
});

// links from <a> to target slide
window.addEventListener('DOMContentLoaded', function(){

  function linkToSlide(slider) {

    let slideId = window.location.hash.substring(1);
    let targetSlide = document.getElementById(slideId);

    if (targetSlide === null) {
      return;
    }

    let slidesArr = Array.from(targetSlide.parentElement.children);
    let indexOfTargetSlide = slidesArr.indexOf(targetSlide);

    slider.slideTo(indexOfTargetSlide);
  }


  linkToSlide(swiperExplore);
});
