$(document).ready(function () {

    let calendar = new Vue({
        el: '#calendarApp',
        data: {
            // year: 2021,
            // month: "Июль",
            // month_genitive: "Июля",
            // monthNumber: 7,
            // firstDayOffset: 2,
            // daysInMonth: 31,
            months: [
                {
                    month: "Май",
                    month_genitive: "Мая",
                    monthNumber: 5,
                    year: 2021,
                    daysInMonth: 30,
                    firstDayOffset: 1,
                },
                {
                    month: "Июнь",
                    month_genitive: "Июня",
                    monthNumber: 6,
                    year: 2021,
                    daysInMonth: 31,
                    firstDayOffset: 2,
                },
                {
                    month: "Июль",
                    month_genitive: "Июля",
                    monthNumber: 7,
                    year: 2021,
                    daysInMonth: 30,
                    firstDayOffset: 3,
                },
                {
                    month: "Июль",
                    month_genitive: "Июля",
                    monthNumber: 7,
                    year: 2021,
                    daysInMonth: 30,
                    firstDayOffset: 3,
                }
            ],
            events: [
                {
                    day: 3,
                    monthNumber: 5,
                    year: 2021,
                    type: "Online-курс",
                    name: "Свадебный наряд моей дочери",
                    link: "#"
                },
                {
                    day: 11,
                    monthNumber: 6,
                    year: 2021,
                    type: "Оффлайн-курс",
                    name: "Свадебный наряд для попугая",
                    link: "#"
                },
                {
                    day: 24,
                    monthNumber: 7,
                    year: 2021,
                    type: "Online-курс",
                    name: "Свадебный наряд для пингвина",
                    link: "#"
                },
                {
                    day: 24,
                    monthNumber: 7,
                    year: 2021,
                    type: "Online-курс",
                    name: "Свадебный наряд для пингвина",
                    link: "#"
                }
            ],
            selectedEvent: null,
            selectedDay: null,
            selectedYear: null,
            selectedMonth: null,
            firstDayOffset: null
            // daysInMonth: null,
        },
        methods: {
            // getMonths: function () {
            //     let arrayAllMonths = [];
            //     let arrayOfMonths = this.events.find(function (event) {
            //         arrayAllMonths.push({[event.monthNumber]: event.month});
            //         arrayAllMonths = Array.from(new Set(arrayAllMonths.map(JSON.stringify))).map(JSON.parse);
            //     });
            //     return arrayAllMonths;
            // },
            // getYear: function () {
            //     let arrayAllYears = [];
            //     let arrayOfYears = this.events.find(function (event) {
            //         arrayAllYears.push([event.year]);
            //         arrayAllYears = Array.from(new Set(arrayAllYears.map(JSON.stringify))).map(JSON.parse);
            //     });
            //     return arrayAllYears;
            // },
            // getData: function () {
            //
            //     let year = this.getYear();
            //     let month = this.getMonths();
            //     this.selectedMonth = month;
            //     this.selectedYear = year;
            //
            // },
            // getCurrentYear: function (year) {
            //     return this.months.find(function (event) {
            //         return event.year == year;
            //     });
            // },
            getCurrentMonth: function () {
                let arrayAllMonths = [];
                let arrayNeedMonths = [];
                let arrayNeedDays = [];
                let arrayOfMonths = this.months.find(function (event) {
                    arrayAllMonths.push([{number: event.monthNumber}, {name: event.month}, {days: event.daysInMonth}]);
                    arrayAllMonths = Array.from(new Set(arrayAllMonths.map(JSON.stringify))).map(JSON.parse);
                });
                // console.log(arrayAllMonths);
                // return arrayAllMonths;
                for (let i = 0; i < arrayAllMonths.length; i++) {
                    for(let j = 0; j < arrayAllMonths[i].length; j++) {
                        if (arrayAllMonths[i][j].days) {
                            arrayNeedDays.push([{day: arrayAllMonths[i][j].days}, {name: arrayAllMonths[i][j].name}]);
                        }
                    }
                }
                // this.selectedMonth = arrayNeedMonths;
                console.log(arrayNeedMonths);
                return arrayNeedMonths;
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