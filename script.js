const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let newYear = "1 Jan 2023";

function countdown() {
    let newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totalseconds = Math.floor((newYearDate - currentDate) / 1000);
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = (Math.floor(totalseconds / 3600)) % 24;
    const minutes = (Math.floor(totalseconds / 60)) % 60;
    const seconds = (Math.floor(totalseconds) % 60);
    console.log(totalseconds, days, hours, minutes, seconds);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    if (totalseconds === 0) {
        var d = new Date(newYear);
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var c = new Date(year + 1, month, day);
        // console.log(c);
        newYear=c.toDateString();
    }
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();  // initial call

setInterval(countdown, 1000);