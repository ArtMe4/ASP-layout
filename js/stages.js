jQuery.fn.reverse = [].reverse;

$(document).ready(function () {

    startStagesAnimation();

});

function startStagesAnimation () {

    let lineTimeOut = 0;
    let itemTimeout = 0;

    $('.stages__row').each(function (index) {

        let self = this;

        setTimeout(function () {
            $(self).addClass('stages__row_active');
        }, lineTimeOut);

        lineTimeOut += 700;

        setTimeout(function () {
            $(self).addClass('stages__row_active-vertical');
        }, lineTimeOut);

        lineTimeOut += 350;

        let $items = $(self).find('.stages__item');

        if (index % 2 === 0) {

            $items.each(function () {

                let self = this;

                setTimeout(function () {
                    $(self).addClass('stages__item_active');
                }, itemTimeout);

                itemTimeout += 350;

            });

        } else {

            $items.reverse().each(function () {

                let self = this;

                setTimeout(function () {
                    $(self).addClass('stages__item_active');
                }, itemTimeout);

                itemTimeout += 350;

            });

        }

        if (window.innerWidth > 767)
            itemTimeout += 350;

    });

}