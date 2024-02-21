import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

const swiperTeam = new Swiper('.explore__slider', {
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
  },
  // breakpoints: {
  //   992: {
  //     slidesPerView: 3,
  //   },
  //   650: {
  //     slidesPerView: 2,
  //   },
  // },
});
