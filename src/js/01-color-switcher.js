const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

// console.dir(startBtn);
stopBtn.disabled = true;
startBtn.addEventListener("click", onStartBtnClick);
stopBtn.addEventListener("click", onStopBtnClick);

function onStartBtnClick (event) {
  timerId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
    event.target.disabled = true;
    stopBtn.disabled = false;
}

function onStopBtnClick(event) {
    clearInterval(timerId);
    event.target.disabled = true;
    startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
