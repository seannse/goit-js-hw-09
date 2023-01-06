import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormElSubmit);

function onFormElSubmit(event) {
  event.preventDefault();
  const { amount, delay, step } = event.target.elements;
  let delayCounter = +delay.value;
  for (let i = 0; i < +amount.value; i += 1) {
    delayCounter += +step.value * (i > 0 ? 1 : 0);
    createPromise(i, delayCounter)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`, {
          width: '320px',
          fontSize: '20px',
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`, {
          width: '320px',
          fontSize: '20px',
        });
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
