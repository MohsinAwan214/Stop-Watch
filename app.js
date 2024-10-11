

let display = document.getElementById('display');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let msec = 0;
let sec = 0;
let mins = 0;

let timerId = null;

startButton.addEventListener('click', function() {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopButton.addEventListener('click', function() {
    clearInterval(timerId);
});

resetButton.addEventListener('click', function() {
    clearInterval(timerId);
    msec = sec = mins = 0; // Reset all counters
    updateDisplay(); // Update the display to show 00:00:00
});

function startTimer() {
    msec++;
    
    if (msec >= 100) {
        msec = 0;
        sec++;
    }
    
    if (sec >= 60) {
        sec = 0;
        mins++;
    }

    updateDisplay();
}

function updateDisplay() {
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minsString = mins < 10 ? `0${mins}` : mins;

    display.textContent = `${minsString}:${secString}:${msecString}`;
}
