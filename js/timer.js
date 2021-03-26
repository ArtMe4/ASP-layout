$(document).ready(function () {

    $('.timer').each(function () {

        let self = this;
        let seconds = $(this).attr('data-seconds');

        if (seconds && !isNaN(seconds)) {

            seconds = parseInt(seconds);

            setInterval(function () {

                countTimer(self, seconds);
                if (seconds > 0) seconds--;

            }, 1000);

        }


    });

    function countTimer(timerEl, seconds) {

        let tempSeconds = seconds;
        let hoursTimer = Math.trunc(tempSeconds / 3600);
        tempSeconds -= hoursTimer * 3600;
        let minutesTimer = Math.trunc(tempSeconds / 60);
        tempSeconds -= minutesTimer * 60;
        let secondsTimer = tempSeconds;

        $(timerEl).find('.timer__hours').text(('0' + hoursTimer.toString()).slice(-2));
        $(timerEl).find('.timer__minutes').text(('0' + minutesTimer.toString()).slice(-2));
        $(timerEl).find('.timer__seconds').text(('0' + secondsTimer.toString()).slice(-2));

    }

});