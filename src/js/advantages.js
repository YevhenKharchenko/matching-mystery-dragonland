import Swiper from 'swiper';
import 'swiper/css/bundle';

const advantagesDots = document.querySelectorAll('.advantages-dot');

let advantagesSwiper;

advantagesSwiper = new Swiper('.advantages-swiper-container', {
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
      document
        .querySelector('.advantages-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateAdvantagesDots(this.realIndex);
    },
  },
});

function updateAdvantagesDots(index) {
  advantagesDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

advantagesDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    advantagesSwiper.slideTo(index);
  });
});
