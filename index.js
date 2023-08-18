const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  looses: 0,
  ties: 0
};

scoreDisply();
//moveDisplay();

function playGame() {
  let compMove = '';
  const randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber >= 0 && randomNumber <= 3) {
    compMove = 'Rock';
  } else if (randomNumber > 3 && randomNumber <= 6) {
    compMove = 'Paper';
  } else {
    compMove = 'Scissors';
  }
  return compMove;
}
document.querySelector('.rockButton').addEventListener('click', () => {
  ranNumber('Rock');
});
document.querySelector('.paperButton').addEventListener('click', () => {
  ranNumber('Paper');
});
document.querySelector('.scissorButton').addEventListener('click', () => {
  ranNumber('Scissors');
});
document.querySelector('.autoPlayButton').addEventListener('click', () => {
  autoPlay();
});
document.querySelector('.resetButton').addEventListener('click', () => {
  score.wins = 0, score.looses = 0, score.ties = 0;
  localStorage.removeItem('score');
  scoreDisply();
})
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    ranNumber('Rock');
  } else if (event.key === 'p') {
    ranNumber('Paper');
  } else if (event.key === 's') {
    ranNumber('Scissors');
  } else if (event.key === 'Shift') {
    score.wins = 0, score.looses = 0, score.ties = 0;
    localStorage.removeItem('score');
    scoreDisply();
  } else if (event.key === 'a') {
    autoPlay();
  }
})

function ranNumber(move) {
  const compMove = playGame();
  let result;
  if (move === 'Rock' && compMove === 'Rock') {
    result = '!! Tie !!'
  } else if (move === 'Rock' && compMove === 'Paper') {
    result = '!! Loose !!'
  } else if (move === 'Rock' && compMove === 'Scissors') {
    result = '!! Win !!'
  } else if (move === 'Paper' && compMove === 'Rock') {
    result = '!! Win !!'
  } else if (move === 'Paper' && compMove === 'Paper') {
    result = '!! Tie !!'
  } else if (move === 'Paper' && compMove === 'Scissors') {
    result = '!! Loose !!'
  } else if (move === 'Scissors' && compMove === 'Rock') {
    result = '!! Loose !!'
  } else if (move === 'Scissors' && compMove === 'Paper') {
    result = '!! Win !!'
  } else if (move === 'Scissors' && compMove === 'Scissors') {
    result = '!! Tie !!'
  }

  document.querySelector('.gameMoves').innerHTML = `<img class="move-btn" src="images/${move}.png">Vs<img class="move-btn"src="images/${compMove}.png">`;

  document.querySelector('.gameResult').innerHTML = result;

  if (result === '!! Win !!') {
    score.wins += 1;
  } else if (result === '!! Loose !!') {
    score.looses += 1;
  } else if (result === '!! Tie !!') {
    score.ties += 1;
  }
  scoreDisply();
  localStorage.setItem('score', JSON.stringify(score));

};

function scoreDisply() {
  document.querySelector(".gameScore").
    innerHTML = `Wins:${score.wins} Looses:${score.looses} Ties:${score.ties}`
}

let isAutoPlaying = false;
let intervalId;
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const move = playGame();
      ranNumber(move);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

console.log([1, 2, 3].filter((value, index) => {
  return value * 2;
}));
