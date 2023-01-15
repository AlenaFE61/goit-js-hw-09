function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const startBtn =  document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyBg = document.querySelector('body');

let timerId = null;


stopBtn.addEventListener('click', onStop);
startBtn.addEventListener('click', onStart);


function onStart() {
  timerId = setInterval(getBgColor, 1000);
   startBtn.toggleAttribute('disabled');
  
}

function onStop() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
}


function getBgColor() {
  bodyBg.style.backgroundColor = getRandomHexColor();
}