// Descris în documentație
import flatpickr from "flatpickr";
// Import suplimentar de stil
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector("button[data-start]");
startBtn.setAttribute("disabled", "true");
let selectedDate = null;
let stopwatch = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      selectedDate = selectedDates[0];
      const currentDate = new Date();
      if (selectedDate < currentDate) {
        window.alert("Please choose a date in the future");
      } else {
        startBtn.removeAttribute("disabled");
      }
      console.log(selectedDates);
    },
  }; 

flatpickr ("#datetime-picker", options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
const days = document.querySelector("span[data-days]"); 
const hours = document.querySelector("span[data-hours]"); 
const minutes = document.querySelector("span[data-minutes]"); 
const seconds = document.querySelector("span[data-seconds]"); 
 
startBtn.addEventListener("click", () => {
    startBtn.setAttribute("disabled", "true");
    stopwatch = setInterval(() => {
        const currentDate = new Date();
        const differenceMs = selectedDate - currentDate;
        const timer = convertMs(differenceMs);
        if (differenceMs < 0) {
            clearInterval(stopwatch);
            return;
        }
        days.textContent = addLeadingZero(timer.days);
        hours.textContent = addLeadingZero(timer.hours);
        minutes.textContent = addLeadingZero(timer.minutes);
        seconds.textContent = addLeadingZero(timer.seconds);
       
    }, 1000);
});

function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}






