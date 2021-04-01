$(document).ready(function () {

    new Swiper('.homepage-hero__slider', {

        spaceBetween: 10,
        slidesPerView: 1,

        breakpoints: {
            768: {
                spaceBetween: 20,
            },
            992: {
                spaceBetween: 30,
            },
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });


});