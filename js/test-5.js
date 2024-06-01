import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
    startBtn: document.querySelector(['data-start'])
}

console.log(refs)

const timer = {
    start() {
        const inittialTime = Date.now()
        console.log('start currentTime:', time)
        setInterval(() => {
            const currentDate = Date.now()
            console.log('setInterval currentDate:', currentDate)
            const deltaTime = currentDate - inittialTime
            console.log('setInterval deltaTime:', deltaTime)
            const time = convertMs(deltaTime)
        },1000)
    }
}

timer.start()

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

