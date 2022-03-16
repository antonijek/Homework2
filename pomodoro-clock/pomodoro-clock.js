let currentMode = "";
let currentTime = "";
const openNewButtons = () => {
  const divs = Array.from(document.querySelectorAll(".btn"));
  divs.map((item) => (item.style.display = "flex"));
};

const startTimer = () => {
  let minutes = currentTime / 60;
  let seconds = currentTime % 60;
  currentTime--;
  time.innerHTML = `${Math.floor(minutes)} : ${
    seconds < 10 ? "0" + seconds : seconds
  }`;
  document.title = `(${time.innerHTML})Pomodoro `;
  if (currentTime === 0) {
    let audio = new Audio("https://www.fesliyanstudios.com/play-mp3/4383");
    audio.play();
    clearInterval(time.begining);
    currentTime =
      Number(currentMode.minutes * 60) + Number(currentMode.seconds);
    time.innerHTML = `${currentMode.minutes} : ${currentMode.seconds}`;
  }
};

const starting = (e) => {
  startTimer();
  time.begining = setInterval(startTimer, 1000);
};

const setTime = (e) => {
  clearInterval(time.begining);
  currentMode = e.target.parentElement;
  time.innerHTML = `${currentMode.minutes} : ${currentMode.seconds}`;
  currentTime = Number(currentMode.minutes * 60) + Number(currentMode.seconds);
};

const stopTimer = () => {
  clearInterval(time.begining);
};

const resetTimer = () => {
  clearInterval(time.begining);
  currentTime = Number(currentMode.minutes * 60) + Number(currentMode.seconds);
  time.innerHTML = `${currentMode.minutes} : ${currentMode.seconds}`;
};

let time = document.querySelector(".clock p");
let pomodoroBtn = document.querySelector("#pomodoro");
pomodoroBtn.addEventListener("click", openNewButtons);
pomodoroBtn.minutes = 25;
pomodoroBtn.seconds = "00";
pomodoroBtn.addEventListener("click", setTime);
let start = document.querySelector(".start");
start.addEventListener("click", starting);
let shortBreakBtn = document.querySelector("#short-break");
shortBreakBtn.addEventListener("click", setTime);
shortBreakBtn.minutes = 5;
shortBreakBtn.seconds = "00";
let longBreak = document.querySelector("#long-break");
longBreak.minutes = 10;
longBreak.seconds = "00";
longBreak.addEventListener("click", setTime);
let stop = document.querySelector(".stop");
stop.addEventListener("click", stopTimer);
let reset = document.querySelector(".reset");
reset.addEventListener("click", resetTimer);
