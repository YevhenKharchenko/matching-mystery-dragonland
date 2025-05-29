import Swiper from 'swiper';
import 'swiper/css/bundle';

const galleryLeftArrow = document.getElementById('galleryLeftArrow');
const galleryRightArrow = document.getElementById('galleryRightArrow');
const galleryDots = document.querySelectorAll('.dot');

let gallerySwiper;

gallerySwiper = new Swiper('.gallery-swiper-container', {
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
      slidesPerView: 4,
    },
  },
  on: {
    init: () => {
      document.querySelector('.gallery-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateGalleryDots(this.realIndex);
      updateGalleryArrows(this);
    },
  },
});

updateGalleryArrows(gallerySwiper);

function updateGalleryDots(index) {
  let dotIndex = 0;

  if (window.innerWidth >= 1440) {
    const totalSlides = gallerySwiper.slides.length;
    const slidesPerView = gallerySwiper.params.breakpoints[1440].slidesPerView;

    if (index === 0) {
      dotIndex = 0;
    } else if (index >= totalSlides - slidesPerView) {
      dotIndex = 2;
    } else {
      dotIndex = 1;
    }
  } else {
    dotIndex = index;
  }

  galleryDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === dotIndex);
  });
}

function updateGalleryArrows(swiper) {
  galleryLeftArrow.disabled = swiper.isBeginning;
  galleryRightArrow.disabled = swiper.isEnd;
}

galleryDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    gallerySwiper.slideTo(index);
  });
});

galleryLeftArrow.addEventListener('click', () => {
  gallerySwiper.slidePrev();
});

galleryRightArrow.addEventListener('click', () => {
  gallerySwiper.slideNext();
});
