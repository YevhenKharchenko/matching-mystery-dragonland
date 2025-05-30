import Swiper from 'swiper';
import 'swiper/css/bundle';

const galleryDots = document.querySelectorAll('.gallery-dot');

let gallerySwiper;

gallerySwiper = new Swiper('.gallery-swiper-container', {
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
      document.querySelector('.gallery-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateGalleryDots(this.realIndex);
    },
  },
});

function updateGalleryDots(index) {
  galleryDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

galleryDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    gallerySwiper.slideTo(index);
  });
});

const galleryListDesk = document.querySelector('.gallery-list-desk');

let isGalleryDown = false;
let startGalleryX;
let galleryScrollLeft;

galleryListDesk.addEventListener('mousedown', e => {
  isGalleryDown = true;
  galleryListDesk.classList.add('grabbing');
  startGalleryX = e.pageX - galleryListDesk.offsetLeft;
  galleryScrollLeft = galleryListDesk.scrollLeft;
});

galleryListDesk.addEventListener('mouseleave', () => {
  isGalleryDown = false;
  galleryListDesk.classList.remove('grabbing');
});

galleryListDesk.addEventListener('mouseup', () => {
  isGalleryDown = false;
  galleryListDesk.classList.remove('grabbing');
});

galleryListDesk.addEventListener('mousemove', e => {
  if (!isGalleryDown) return;
  e.preventDefault();
  const x = e.pageX - galleryListDesk.offsetLeft;
  const walk = (x - startGalleryX) * 1.5;
  galleryListDesk.scrollLeft = galleryScrollLeft - walk;
});
