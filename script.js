
// Stopwatch logic
let startTime;
let interval;

function startStopwatch() {
    startTime = Date.now() - (interval || 0);
    interval = setInterval(updateDisplay, 10);

    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;
}

function stopStopwatch() {
    clearInterval(interval);
    interval = null;

    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').disabled = true;
}

function resetStopwatch() {
    clearInterval(interval);
    interval = null;
    document.getElementById('display').textContent = '00:00:00';

    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').disabled = true;
}

function updateDisplay() {
    const currentTime = Date.now() - startTime;
    const formattedTime = formatTime(currentTime);
    document.getElementById('display').textContent = formattedTime;
}

function formatTime(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}