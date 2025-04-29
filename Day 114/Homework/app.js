const randomNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function() {
  const guess = Number(guessInput.value);
  guessInput.value = "";
  if (guess > 20) {
    alert("Number is Too high Try again");
    return;
  }
  if (guess < 1) {
    alert("Number is Too low Try again");
    return;
  }
  attempts++;
  if (guess === randomNumber) {
    alert("Correct! Attempts: " + attempts);
  } else if (attempts >= 10) {
    alert("You have reached the maximum attempts");
  } else if (guess > randomNumber) {
    alert("Number is Too high Try again");
  } else if (guess < randomNumber) {
    alert("Number is Too low Try again");
  }
});
