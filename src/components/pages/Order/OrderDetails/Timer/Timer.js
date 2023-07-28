const TIMER_KEY = "timer_remaining_time";
const THIRTY_MINUTES = 30 * 60; 
let timerInterval; 

function startTimer(remainingTime = THIRTY_MINUTES) {
  const endTime = Date.now() + remainingTime * 1000; 

  if (timerInterval) {
    clearInterval(timerInterval); 
  }

  timerInterval = setInterval(() => {
    const currentTime = Date.now();
    const timeLeft = Math.floor((endTime - currentTime) / 1000); 

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      localStorage.removeItem(TIMER_KEY);
    } else {
      localStorage.setItem(TIMER_KEY, JSON.stringify(timeLeft));
    }
  }, 1000); 
}

function getRemainingTime() {
  const remainingTime = localStorage.getItem(TIMER_KEY);
  return remainingTime ? JSON.parse(remainingTime) : null;
}

function restoreTimer() {
  const remainingTime = getRemainingTime();
  if (remainingTime) {
    startTimer(remainingTime);
  } else {
    startTimer();
  }
}

export { startTimer, getRemainingTime, restoreTimer, THIRTY_MINUTES };
