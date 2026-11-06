

let inputSeconds = document.getElementById("inputSeconds");
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let stopButton = document.getElementById("stopButton");

let interval;
let secondsLeft = 0;

playButton.addEventListener("click", function() {

    clearInterval(interval);

    if (secondsLeft === 0) {
        secondsLeft = Number(inputSeconds.value);
    }

    if (secondsLeft <= 0) {
        timerDisplay.textContent = "Inserisci un numero valido di secondi.";
        return;
    }

    timerDisplay.textContent = secondsLeft;

    interval = setInterval(()=> {
        secondsLeft--;
        timerDisplay.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(interval);
            timerDisplay.textContent = "Tempo scaduto!";
        }   
    }, 1000);
});

pauseButton.addEventListener("click", function() {
    clearInterval(interval);
});


stopButton.addEventListener("click", function() {
    clearInterval(interval);
    secondsLeft = 0;
    inputSeconds.value = "";
    timerDisplay.textContent = "";
});


