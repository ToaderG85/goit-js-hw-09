
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

//ia butonul start
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let timer = null;

// add event la click sa pornesca functia de schimbat culorile

startBtn.addEventListener("click", (event) => {
   startBtn.setAttribute("disabled","true");
   const body = document.querySelector("body");
   timer = setInterval(() => {
        const randomColor = getRandomHexColor();
        body.style.backgroundColor = randomColor;
    }, 1000);
});

stopBtn.addEventListener("click", (event) => {
    startBtn.removeAttribute("disabled");
    clearInterval(timer);
});

