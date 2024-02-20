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
    // clickable: true,
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

// const swiperTeam = new Swiper('.team-slider', {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   modules: [Navigation, Pagination],
//   pagination: {
//     clickable: true,
//     el: '.swiper-pagination',
//   },
//
//   draggable: true,
//   grabCursor: true,
//   navigation: {
//     nextEl: '.team .btn--next',
//     prevEl: '.team .btn--prev',
//   },
//   breakpoints: {
//     992: {
//       slidesPerView: 3,
//     },
//     650: {
//       slidesPerView: 2,
//     },
//   },
// });

// const swiperReviews = new Swiper('.reviews__slider', {
//   slidesPerView: 1,
//   speed: 500,
//   effect: 'fade',
//   autoplay: {
//     delay: 200,
//   },
//   modules: [Navigation, Scrollbar, Pagination, EffectFade],
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true,
//   },
//   draggable: true,
//   grabCursor: true,
//   navigation: {
//     nextEl: '.reviews .btn--next',
//     prevEl: '.reviews .btn--prev',
//   },
// });
