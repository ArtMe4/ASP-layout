$(document).ready(function () {

    new Swiper('.review-slider__slider', {

        spaceBetween: 16,
        slidesPerView: 'auto',

        breakpoints: {
            768: {
                spaceBetween: 20,
            },
            992: {
                spaceBetween: 30,
            },
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });


});