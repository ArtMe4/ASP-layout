$(document).ready(function () {

    let timeOut = 0;

    $('.academy-numbers__item').each(function () {

        let self = this;

        setTimeout(function () {
            $(self).addClass('academy-numbers__item_active');
        }, timeOut);

        timeOut += 700;

    });

});