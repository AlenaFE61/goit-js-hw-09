import Notiflix from 'notiflix';

const startBtn = document.querySelector(".form");


function createPromise(position, delay) {
  const promiseFun = {position, delay};

  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) =>{
    setTimeout(() => {
  if (shouldResolve) {
    // Fulfill
    resolve(promiseFun);
  } else {
    // Reject
    reject(promiseFun);
  }
}, delay);
  });
}


startBtn.addEventListener('submit', onStart);

function onStart(event) {

  event.preventDefault();

  let delay = Number(startBtn.delay.step);

  for (let i = 1; i <= startBtn.amount.value; i += 1) {
    createPromise(i, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delay +=Number(startBtn.delay.value);
}
}
