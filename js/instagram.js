$(document).ready(function () {

    new Swiper('.instagram__slider', {
        spaceBetween: 10,
        slidesPerView: 'auto',
        breakpoints: {
            992: {
                spaceBetween: 15,
            },
        }
    });

});