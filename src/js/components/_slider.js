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

const featuredProjects = new Swiper('.projects', {
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
    nextEl: '.projects .btn--next',
    prevEl: '.projects .btn--prev',
  },
  pagination: {
    el: '.projects .swiper-pagination.projects__pagination',
    clickable: true,
  },
});

// creating multi swiper sliders for elements with same className on same page
 let multiSlider = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let newId = `gallery-${i + 1}`;
    arr[i].setAttribute('id', newId);
  }

   const multiSliders = sliderElem => {
     let elId = sliderElem.getAttribute('id');

     return new Swiper(`#${elId}`, {
       slidesPerView: 1,
       speed: 500,
       effect: 'fade',
       autoplay: {
         delay: 200,
       },
       modules: [Navigation, Scrollbar, Pagination, EffectFade],
       draggable: false,
       grabCursor: true,
       pagination: {
         el: `#${elId} .swiper-pagination`,
         clickable: true,
       },
     });
   }

  return arr.forEach(arr => multiSliders(arr));
}

const galleries = document.querySelectorAll('.gallery');
 if(galleries) {
   multiSlider(galleries);
 }



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
