let randomNumber = Math.floor(Math.random() * 100);
console.log('randomNumber', randomNumber)

let numberOfAvailableGuesses = 5;

const guesses = [];

function guessNumber() {
  if (numberOfAvailableGuesses <= 0) return;
  numberOfAvailableGuesses -= 1;

  const userGuess = document.getElementById("guessInput").value;

  guesses.push(userGuess);

  if (userGuess > randomNumber) {
    document.getElementById("prompt").innerHTML =
      "Guessed too high" + `(${numberOfAvailableGuesses})`;
  }
  if (userGuess < randomNumber) {
    document.getElementById("prompt").innerHTML =
      "Guessed too low" + `(${numberOfAvailableGuesses})`;
  }
  if (userGuess == randomNumber) {
    document.getElementById("prompt").innerHTML = "You won!";
  }

  document.getElementById("guessHistory").innerHTML = "";

  guesses.map(guess => {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(guess);
    node.appendChild(textnode);
    document.getElementById("guessHistory").appendChild(node);
  });
}

function restart() {
  numberOfAvailableGuesses = 5;
  randomNumber = Math.floor(Math.random() * 100);
  document.getElementById("prompt").innerHTML = "Number of Guesses(5)";
  document.getElementById("guessHistory").innerHTML = "";
}
