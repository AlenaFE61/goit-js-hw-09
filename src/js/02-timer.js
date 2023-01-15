import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const startBtn = document.querySelector('button[data-start]');
const day =  document.querySelector('span[data-days]');
const hour = document.querySelector('span[data-hours]');
const mins = document.querySelector('span[data-minutes]');
const sec = document.querySelector('span[data-seconds]');


let timerId = null;


function pad(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


const options = {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
  time_24hr: true,
  altInput:true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < new Date()) {
      startBtn.disabled = true;
      window.alert('Please choose a date in the future');
      return;
    }
    if (selectedDates[0] > new Date()) {
      startBtn.disabled = false;
    }

    startBtn.addEventListener('click', () => {
      timerId = setInterval(() => {
        const nextTime = selectedDates[0] - new Date();

        if (nextTime < 1000) {
          clearInterval(timerId);
        }
        const convert = convertMs(nextTime);
        begineTimer(convert);
      }, 1000);
    });
  },
};

flatpickr('#datetime-picker', options);

function begineTimer({ days, hours, minutes, seconds }) {
  day.textContent = `${days}`;
  hour.textContent = `${hours}`;
  mins.textContent = `${minutes}`;
  sec.textContent = `${seconds}`;
};

