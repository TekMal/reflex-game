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
  livePanel.innerHTML = `Życie: ${liveArg}`
}

function clickGreenBox(){
  createNewGameBoard()
  score++
  previousScore = score
  newScore()
}

function makeGreenBox(){
  const i = Math.floor(Math.random() * [...gameBoxes].length)
  gameBoxes[i].style.backgroundColor = "green"
  gameBoxes[i].addEventListener('click', clickGreenBox)
}
function createNewGameBoard(){
  if(score !==0 && score === previousScore){
    newLive(live--)
  }
  gameBoxes.forEach(item => 
    {item.style.backgroundColor = "white"
    item.removeEventListener('click', clickGreenBox)})
 makeGreenBox()
}
function start(){
  createNewGameBoard()
  intervalBoard = setInterval(createNewGameBoard, 2000)
  intervalTime = setInterval(timer, 1000)
  startButton.removeEventListener('click', start)
}
function reset(){
  score = 0
  time = 60
  live = 3
  timer()
  newScore()
  newLive()
  clearInterval(intervalBoard)
  clearInterval(intervalTime)
  createNewGameBoard()
}

//makeGreenBox()