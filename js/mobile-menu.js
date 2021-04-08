$(document).ready(function () {

    $('.mobile-menu__link_js').on('click', function (e) {

        e.preventDefault();
        $('.mobile-menu__level').removeClass('mobile-menu__level_active');
        $(e.target.hash).addClass('mobile-menu__level_active');


    });

});