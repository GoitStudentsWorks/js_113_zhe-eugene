import Swiper from 'swiper';
import { Navigation, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.projects-swiper-container', {
        modules: [Navigation, Autoplay, Keyboard],
        loop: false,
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: '.projects-button-next',
            prevEl: '.projects-button-prev'
        },
        watchOverflow: true,
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            375: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 32
            },
            1440: {
                slidesPerView: 1,
                spaceBetween: 32
            }
        },
        on: {
            init: function() {
                updateNavigationButtons(this);
            },
            slideChange: function() {
                updateNavigationButtons(this);
            },
        }
    });
    
    function updateNavigationButtons(swiper) {
        const prevButton = document.querySelector('.projects-button-prev');
        const nextButton = document.querySelector('.projects-button-next');
        
        if (prevButton && nextButton) {
        prevButton.disabled = swiper.isBeginning;
        nextButton.disabled = swiper.isEnd;
    }
}
});