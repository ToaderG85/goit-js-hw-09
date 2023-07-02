import Notiflix from 'notiflix'; 

function createPromise(position, delay) {  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay});// Fulfill
      } else {
        reject({position, delay});// Reject
      }
    }, delay);
  });
  return promise;  
}

const form = document.querySelector(".form");

form.addEventListener("submit",(event) => {  
    event.preventDefault();
    const {
      elements: { delay, step, amount }
    } = event.currentTarget;
    for (let i = 1; i <= Number(amount.value); i++) {
      createPromise(i, Number(delay.value) + (i -1) * Number(step.value)) 
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    }
});