$(document).ready(function () {

    let calendar = new Vue({
        el: '#calendarApp',
        data: {
            year: 2021,
            month: "Март",
            month_genitive: "Марта",
            firstDayOffset: 2,
            daysInMonth: 31,
            events: [
                {
                    day: 3,
                    type: "Online-курс",
                    name: "Свадебный наряд моей дочери",
                    link: "#"
                },
                {
                    day: 11,
                    type: "Оффлайн-курс",
                    name: "Свадебный наряд для попугая",
                    link: "#"
                },
                {
                    day: 24,
                    type: "Online-курс",
                    name: "Свадебный наряд для пингвина",
                    link: "#"
                }
            ],
            selectedEvent: null,
            selectedDay: null,
        },
        methods: {
            getEventByDay: function (day) {
                return this.events.find(function (event) {
                    return event.day == day;
                });
            },
            selectEvent: function (day) {

                let event = this.getEventByDay(day);
                if (event) {

                    this.selectedDay = day;
                    this.selectedEvent = event;

                    if (window.innerWidth > 1199) {
                        if (event.link)
                            document.location.href = event.link;
                    }

                }

            },
            goToEvent: function (event) {
                if (event.link)
                    document.location.href = event.link;
            }
        },
    })

});