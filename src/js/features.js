import Swiper from 'swiper';
import 'swiper/css/bundle';

const featuresDots = document.querySelectorAll('.features-dot');

let featuresSwiper;

featuresSwiper = new Swiper('.features-swiper-container', {
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
        .querySelector('.features-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateFeaturesDots(this.realIndex);
    },
  },
});

function updateFeaturesDots(index) {
  featuresDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

featuresDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    featuresSwiper.slideTo(index);
  });
});
