$(document).ready(function () {

    new Swiper('.dresses-types__slider', {

        spaceBetween: 10,
        slidesPerView: 'auto',

        breakpoints: {
            992: {
                spaceBetween: 20,
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