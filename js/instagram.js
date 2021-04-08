$(document).ready(function () {

    new Swiper('.instagram__slider', {
        spaceBetween: 10,
        slidesPerView: 'auto',
        breakpoints: {
            992: {
                spaceBetween: 15,
            },
        },
        on: {
            init: function () {
                //animation
                let timeout = 0;
                $('.instagram__photo').each(function () {
                    let self = this;
                    setTimeout(function () {
                        $(self).addClass('instagram__photo_active');
                    }, timeout);
                    timeout += 75;
                });
            },
        },
    });

});