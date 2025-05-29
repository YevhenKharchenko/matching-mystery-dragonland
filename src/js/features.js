import Swiper from 'swiper';
import 'swiper/css/bundle';

// const featuresLeftArrow = document.getElementById('featuresLeftArrow');
// const featuresRightArrow = document.getElementById('featuresRightArrow');

let featuresSwiper;

featuresSwiper = new Swiper('.features-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 20,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      initialSlide: 0,
      slidesPerView: 6,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.features-swiper-container')
        .classList.add('show');
    },
  },
});
