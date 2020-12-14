new Swiper('.image-slider',{

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard:{
        //Включаем упрвление калвиатурой
        enabled: true,
        //Только когда слайдер в пределах вьюпорта
        onlyInViewport: true,
    },

    mousewheel:{
      sensitivity:1,
    },

    grabCursor: true,
    slideToClickedSlide:true,

    slidesPerView: 'auto',


});