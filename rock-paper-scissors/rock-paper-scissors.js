let choices = ['rock', 'paper', 'scissors']

let playerDisplay = document.getElementById('playerDisplay')
let computerDisplay = document.getElementById('computerDisplay')
let resultDisplay = document.getElementById('resultDisplay')
let winsResult = document.getElementById('wins')
let loseResult = document.getElementById('loses')
let result = ''
let wins = 0
let loses = 0

function playGame(playerChoice) {

  let computerChoice = choices[Math.floor(Math.random() * 3)]
  if (playerChoice === computerChoice) {
    result = 'It is tie'
  } else {
    switch (playerChoice) {
      case 'rock':
        result = (computerChoice === 'scissors') ? 'You Win' : 'You Lose';
        break;
      case 'paper':
        result = (computerChoice === 'rock') ? 'You Win' : 'You Lose';
        break;
      case 'scissors':
        result = (computerChoice === 'paper') ? 'You Win' : 'You Lose';
        break;
    }
  }
  resultDisplay.textContent = result;
  computerDisplay.innerHTML = `Computer: ${computerChoice}`;
  playerDisplay.innerHTML = `Player: ${playerChoice} `;
  resultDisplay.classList.remove('green', 'red')
  if (result === 'You Win') {
    resultDisplay.classList.add('green')
    wins++
    winsResult.textContent = `Wins: ${wins}`
    winsResult.classList.add('green')
  } else if (result === 'You Lose') {
    resultDisplay.classList.add('red')
    loses++
    loseResult.textContent = `Loses: ${loses}`
    loseResult.classList.add('red')
  }


}