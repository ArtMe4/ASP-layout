(function ($) {
    $('.yt-lazy').each(function () {
        let id = $(this).data('youtube-id');

        $(this).append('<div class="yt-lazy__preview"></div>')

        let $preview = $(this).find('.yt-lazy__preview');

        $preview
            .append('<img src="https://img.youtube.com/vi/' + id + '/maxresdefault.jpg" ' +
                'class="yt-lazy__preview-img" alt="">')
            .append('<svg width="69" height="50" class="yt-lazy__play">' +
                '<path class="yt-lazy__play-bg" d="M67.3827 7.80213C66.5899 4.75126 64.266 2.34629 61.319 1.52478C55.9351 0 34.3993 0 34.3993 0C34.3993 0 12.8644 0 7.48053 1.46697C4.59019 2.28761 2.20964 4.75169 1.41682 7.80213C0 13.3745 0 24.9307 0 24.9307C0 24.9307 0 36.5453 1.41682 42.0594C2.21048 45.1098 4.5335 47.5148 7.48095 48.3363C12.9211 49.8615 34.4002 49.8615 34.4002 49.8615C34.4002 49.8615 55.9351 49.8615 61.319 48.3945C64.2664 47.5735 66.5899 45.1685 67.3835 42.118C68.7999 36.5453 68.7999 24.9894 68.7999 24.9894C68.7999 24.9894 68.8566 13.3745 67.3827 7.80213ZM27.5428 35.6068V14.2546L45.4509 24.9307L27.5428 35.6068Z" fill="#f00"/>' +
                '<path d="M27.5436 35.6068V14.2546L45.4517 24.9307L27.5436 35.6068Z" fill="white"/>' +
                '</svg>')

        $(this).click(function () {
            $preview.addClass('darker').after(
                '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + id + '?rel=0&autoplay=1" ' +
                'allowfullscreen allow="autoplay"></iframe>'
            );
        })
    })
})(jQuery);