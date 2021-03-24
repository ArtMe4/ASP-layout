$(document).ready(function () {

    let $courseTag = $('.courses-menu__tag:not(".courses-menu__tag_online")');
    let $onlineTag = $('.courses-menu__tag_online');

    let activeClass = 'courses-menu__tag_active';
    let wrapperClass = 'courses-menu__courses-wrap';
    let linkHiddenClass = 'courses-menu__link_hidden';
    let linkOnlineHiddenClass = 'courses-menu__link_hidden-online';
    let linkClass = 'courses-menu__link';

    //скрываем все онлайн курсы
    $('.' + linkClass + '[data-online="true"]').addClass(linkOnlineHiddenClass);

    //переключатель онлайн
    $onlineTag.on('click', function () {

        $(this).toggleClass(activeClass);
        $(this)
            .closest('.' + wrapperClass)
            .find('.' + linkClass)
            .toggleClass(linkOnlineHiddenClass);

    });

    //фильтрация по тэгу
    $courseTag.on('click', function () {

        $courseTag.removeClass(activeClass);
        $(this).addClass(activeClass);

        let activeTag = $(this).attr('data-tag');

        if (activeTag !== 'all') {

            $(this)
                .closest('.' + wrapperClass)
                .find('.' + linkClass)
                .addClass(linkHiddenClass);

            $(this)
                .closest('.' + wrapperClass)
                .find('.' + linkClass + '[data-tag="' + activeTag +'"]')
                .removeClass(linkHiddenClass);

        } else {

            $(this)
                .closest('.' + wrapperClass)
                .find('.' + linkClass)
                .removeClass(linkHiddenClass);

        }

    });

});