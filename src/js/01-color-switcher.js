function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const startBtn =  document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyBg = document.querySelector('body');

let timerId = null;
stopBtn.toggleAttribute('disabled');



stopBtn.addEventListener('click', onStop);
startBtn.addEventListener('click', onStart);


function onStart() {
  timerId = setInterval(getBgColor, 1000);
  stopBtn.disabled = 'false';
  stopBtn.removeAttribute('disabled');
   startBtn.toggleAttribute('disabled');

  
  
}

function onStop() {
  clearInterval(timerId);
  stopBtn.disabled = 'false';
  startBtn.removeAttribute('disabled');
}


function getBgColor() {
  bodyBg.style.backgroundColor = getRandomHexColor();
}