import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  buttonEl: document.querySelector('[data-start]'),
  inputEl: document.querySelector('#datetime-picker'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minEl: document.querySelector('[data-minutes]'),
  secEl: document.querySelector('[data-seconds]'),
};

refs.buttonEl.disabled = true;
let startTime;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() > Date.now()) {
      refs.buttonEl.disabled = false;
      startTime = selectedDates[0];
    } else {
      Notify.failure('Please choose a date in the future');
    }
  },
});

refs.buttonEl.addEventListener('click', onButtonElClick);

function onButtonElClick({ target }) {
  const intervalID = setInterval(() => {
    const leftTime = (startTime.getTime() || 0) - Date.now();
    if (leftTime >= 0) {
      renderMarkup(convertMs(leftTime));
    } else {
      Notify.info('Time out');
      refs.inputEl.disabled = false;
      clearInterval(intervalID);
    }
  }, 1000);
  target.disabled = true;
  refs.inputEl.disabled = true;
}

function renderMarkup(obj) {
  const { days, hours, minutes, seconds } = obj;
  refs.daysEl.innerHTML = addLeadingZero(days);
  refs.hoursEl.innerHTML = addLeadingZero(hours);
  refs.minEl.innerHTML = addLeadingZero(minutes);
  refs.secEl.innerHTML = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

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
