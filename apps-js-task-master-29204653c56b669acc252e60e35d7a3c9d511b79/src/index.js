import {tempAlert} from "./helpers"
const gameBoxes = document.querySelectorAll("div.gameSquare")
const scorePanel = document.getElementById("scorePanel")
const timePanel = document.getElementById("timePanel")
const livePanel = document.getElementById("livePanel")
const startButton  = document.getElementById("start")
startButton.addEventListener('click', start)
document.getElementById("reset").addEventListener('click', reset)
let intervalBoard = null
let intervalTime = null
let intervalResetGreenBox = null
let score = 0
let previousScore = 0
let time = 60
let live = 3

function timer(){
  if(time === 0){
    checkLiveAndTime()
  }
  else{
  timePanel.innerHTML =  `Czas: ${time--} sek`
  }
}
function newScore(){
  scorePanel.innerHTML = `Punkty: ${score}`
}
function newLive(liveArg){
  livePanel.innerHTML = `Życia: ${liveArg}`
}
function start(){
  createNewGameBoard()
  intervalTime = setInterval(timer, 1000)
  intervalBoard = setInterval(createNewGameBoard, 3000)
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
  resetOnlyBoard()
}
function resetOnlyBoard(){
  clearInterval(intervalResetGreenBox)
  gameBoxes.forEach(item => 
    {item.style.backgroundColor = "white"
    item.addEventListener('click', lostLive)
    item.removeEventListener('click', clickGreenBox)})
}
function makeGreenBox(){
  const i = Math.floor(Math.random() * [...gameBoxes].length)
  gameBoxes[i].style.backgroundColor = "green"
  gameBoxes[i].removeEventListener('click', lostLive)
  gameBoxes[i].addEventListener('click', clickGreenBox)
}
function createNewGameBoard(){
  checkLiveAndTime()
  intervalResetGreenBox = setInterval(resetOnlyBoard, 2000)
  updateScore()
  gameBoxes.forEach(item => 
    {item.style.backgroundColor = "white"
    item.addEventListener('click', lostLive)
    item.removeEventListener('click', clickGreenBox)})
  makeGreenBox()
}
function clickGreenBox(){
  resetOnlyBoard()
  score++
  newScore()
}
function updateScore(){
  console.log(score)
  console.log(previousScore)
  if(time <=58 && score === previousScore){
    newLive(--live)
    tempAlert('straciłeś życie', 500)
  }
  else{
    previousScore = score
  }
}
function checkLiveAndTime(){
  if(live === 0 || time === 0){
    reset()
    tempAlert('Game over', 1000)
  }
}
function lostLive(){
  newLive(--live)
  tempAlert('straciłeś życie', 500)
  checkLiveAndTime()
}