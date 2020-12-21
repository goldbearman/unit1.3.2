const slider = document.querySelector('.swiper-container');
let mySwiper;

function mobileSlider() {
    if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper('.image-slider', {
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            keyboard: {
                //Включаем упрвление калвиатурой
                enabled: true,
                //Только когда слайдер в пределах вьюпорта
                onlyInViewport: true,
            },
            mousewheel: {
                sensitivity: 1,
            },
            grabCursor: true,
            slideToClickedSlide: true,
            slidesPerView: 'auto',
        });
        slider.dataset.mobile = 'true';
    }
    if (window.innerWidth > 768) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
    }
}

mobileSlider();
window.addEventListener('resize', () => {
    mobileSlider();
});

// var makeElement = function (tagName, className, text) {
//     var element = document.createElement(tagName);
//     element.classList.add(className);
//     if (text) {
//         element.textContent = text;
//     }
//     return element;
// };


