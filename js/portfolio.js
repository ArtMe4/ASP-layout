let portfolioSlider;

$(document).ready(function () {

    portfolioSlider = new Swiper('.portfolio__slider', {

        spaceBetween: 10,
        slidesPerView: 'auto',

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    $('a[href="#portfolio-students"]').on('shown.bs.tab', function () {

        if (Array.isArray(portfolioSlider)) {
            portfolioSlider.forEach(function (slider) {
                slider.update();
            })
        } else {
            portfolioSlider.update();
        }

    })

});