// Declare variables
let attempts = 0;
let randomNum = Math.floor(Math.random () * 100 + 1);

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");

const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

// Event listeners
submit.addEventListener("click", checkGuess);

function checkGuess() {
    const userValue = Number(guess.value);
    attempts++;
}