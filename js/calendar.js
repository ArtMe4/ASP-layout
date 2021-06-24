$(document).ready(function () {

    let calendar = new Vue({
        el: '#calendarApp',
        data: {

            firstDayOffset: 2,
            daysInMonth: 31,

            eventsMonths: [

                {
                    month: "Март",
                    month_genitive: "Марта",
                    monthNumber: 5,
                },
                {
                    month: "Июнь",
                    month_genitive: "Июня",
                    monthNumber: 6,
                },
                {
                    month: "Июль",
                    month_genitive: "Июля",
                    monthNumber: 7,
                }

            ],

            events: [
                {
                    year: 2021,
                    month: "Март",
                    month_genitive: "Марта",
                    day: 3,
                    type: "Online-курс",
                    name: "Свадебный наряд моей дочери",
                    link: "#"
                },
                {
                    month: "Июнь",
                    month_genitive: "Июня",
                    day: 11,
                    type: "Оффлайн-курс",
                    name: "Свадебный наряд для попугая",
                    link: "#"
                },
                {
                    month: "Июль",
                    month_genitive: "Июля",
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
            getMonths: function () {

                let arrayOfMonths = this.eventsMonths.find(function (event) {
                    console.log(event.monthNumber);
                });

            },
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