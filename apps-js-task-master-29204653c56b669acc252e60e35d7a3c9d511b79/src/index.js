const gameBoxes = document.querySelectorAll("div.gameSquare")
const scorePanel = document.getElementById("scorePanel")
const timePanel = document.getElementById("timePanel")
const livePanel = document.getElementById("livePanel")
const startButton  = document.getElementById("start")
startButton.addEventListener('click', start)
document.getElementById("reset").addEventListener('click', reset)
let intervalBoard = null
let intervalTime = null
let score = 0
let previousScore = 0
let time = 60
let live = 3

function timer(){
  timePanel.innerHTML =  `Czas: ${time--}`
}
function newScore(){
  scorePanel.innerHTML = `Punkty: ${score}`
}
function newLive(liveArg){
  livePanel.innerHTML = `Życia: ${liveArg}`
}

function clickGreenBox(){
  resetBoard()
  score++
  newScore()
}

function makeGreenBox(){
  const i = Math.floor(Math.random() * [...gameBoxes].length)
  gameBoxes[i].style.backgroundColor = "green"
  gameBoxes[i].addEventListener('click', clickGreenBox)
}
function createNewGameBoard(){
  updateScore()
  gameBoxes.forEach(item => 
    {item.style.backgroundColor = "white"
    item.removeEventListener('click', clickGreenBox)})
  makeGreenBox()
}
function updateScore(){
  console.log(score)
  console.log(previousScore)
  if(time <=58 && score === previousScore){
    newLive(live--)
  }
  else{
    previousScore = score
  }
}
function start(){
  createNewGameBoard()
  intervalTime = setInterval(timer, 1000)
  intervalBoard = setInterval(createNewGameBoard, 2000)
  startButton.removeEventListener('click', start)
}
function reset(){
  startButton.addEventListener('click', start)
  score = 0
  previousScore = 0
  time = 60
  live = 3
  timer()
  newScore()
  newLive(live)
  clearInterval(intervalBoard)
  clearInterval(intervalTime)
  resetBoard()
}
function resetBoard(){
  gameBoxes.forEach(item => 
    {item.style.backgroundColor = "white"
    item.removeEventListener('click', clickGreenBox)})
}

//makeGreenBox()