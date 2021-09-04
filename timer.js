class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.container = document.querySelector(selector);
        this.targetDate = targetDate;
        this.refs = this.getRefs(selector);
    }

    getRefs() {
        let days = document.getElementById("days");
        let hours = document.querySelector('#hours');
        let minutes = document.querySelector('#minutes');
        let seconds = document.querySelector('#seconds');
        const headline = document.querySelector('#headline');
        const counter = document.querySelector('#counter');
        return { days, hours, minutes, seconds, headline, counter };
    }

    countDaysLeft() {
        let countDown = this.targetDate.getTime();
        let now = new Date().getTime();
        let distance = countDown - now;

        this.refs.days.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.refs.hours.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.refs.minutes.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.refs.seconds.innerText = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            this.refs.headline.innerText = "Today Is The Day!";
            this.refs.counter.style.display = "none";
            clearInterval(this.intervalId);
        }

    }

    intervalId = setInterval(this.countDaysLeft.bind(this), 0);
}

let newTimer = new CountdownTimer({ selector: '#timer-1', targetDate: new Date('Sep 13, 2021 11:40:00'), });