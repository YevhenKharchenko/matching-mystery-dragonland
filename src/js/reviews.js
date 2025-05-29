import Swiper from 'swiper';
import 'swiper/css/bundle';

let reviewsSwiper;

reviewsSwiper = new Swiper('.reviews-swiper-container', {
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
      slidesPerView: 4,
    },
  },
  on: {
    init: () => {
      document.querySelector('.reviews-swiper-container').classList.add('show');
    },
  },
});
