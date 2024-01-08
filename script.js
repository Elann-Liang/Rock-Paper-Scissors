let playerWon = 0;
let compWon = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "rock";
  }
}

function getPlayerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "rock";
  }
}

function play(computer, player) {
  computer = computer.toLowerCase();
  player = player.toLowerCase();
  if (computer === player) return "Tie!";
  if (computer === "rock" && player === "paper") {
    playerWon++;
    return "You Won! Paper > Rock";
  }
  if (computer === "rock" && player === "scissors") {
    compWon++;
    return "You Lost! Scissors < Rock";
  }

  if (computer === "paper" && player === "rock") {
    compWon++;
    return "You Lost! Rock < Paper ";
  }
  if (computer === "paper" && player === "scissors") {
    playerWon++;
    return "You Won! Scissors > Paper";
  }

  if (computer === "scissors" && player === "rock") {
    playerWon++;
    return "You Won! Rock > Scissors";
  }
  if (computer === "scissors" && player === "paper") {
    compWon++;
    return "You Lost! Paper < Scissors ";
  }

  return "Something impossible happened";
}

function game(number = 5) {
  playerWon = 0;
  compWon = 0;
  let round = 1;
  for (let i = 0; i < number; i++) {
    console.log(
      `Round ${round++}: ${play(getComputerChoice(), getPlayerChoice())}`
    );
  }
  if (playerWon === compWon) {
    console.log(`Tie! ${playerWon} VS ${compWon}`);
    return;
  }
  playerWon > compWon
    ? console.log(`You Won! ${playerWon} VS ${compWon}`)
    : console.log(`You Lost! ${playerWon} VS ${compWon}`);
}

console.log("It is running");
