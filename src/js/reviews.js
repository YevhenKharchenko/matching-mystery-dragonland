import Swiper from 'swiper';
import 'swiper/css/bundle';

const reviewsDots = document.querySelectorAll('.reviews-dot');

let reviewsSwiper;

reviewsSwiper = new Swiper('.reviews-swiper-container', {
  direction: 'horizontal',
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 16,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      spaceBetween: 24,
      initialSlide: 0,
      slidesPerView: 4,
    },
  },
  on: {
    init: () => {
      document.querySelector('.reviews-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateReviewsDots(this.realIndex);
    },
  },
});

function updateReviewsDots(index) {
  reviewsDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

reviewsDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    reviewsSwiper.slideTo(index);
  });
});
