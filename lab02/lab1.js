const prompt = require("prompt");

prompt.start();

prompt.get(["userSelection"], function (err, result) {
  if (err) {
    console.error(err);
    return;
  }

  let userSelection = result.userSelection.toUpperCase();
  let randomNum = Math.random();
  let computerSelection;

  if (randomNum <= 0.34) {
    computerSelection = "PAPER";
  } else if (randomNum <= 0.67) {
    computerSelection = "SCISSORS";
  } else {
    computerSelection = "ROCK";
  }

  console.log("User Selection:", userSelection);
  console.log("Computer Selection:", computerSelection);

  if (userSelection === computerSelection) {
    console.log("It's a tie");
  } else if (
    (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (userSelection === "PAPER" && computerSelection === "ROCK") ||
    (userSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    console.log("User Wins");
  } else if (
    (computerSelection === "ROCK" && userSelection === "SCISSORS") ||
    (computerSelection === "PAPER" && userSelection === "ROCK") ||
    (computerSelection === "SCISSORS" && userSelection === "PAPER")
  ) {
    console.log("Computer Wins");
  } else {
    console.log("Invalid input! Please choose ROCK, PAPER, or SCISSORS.");
  }
});
