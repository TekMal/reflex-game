const gameBoxes = document.querySelectorAll("div.gameSquare")
//gameBoxes.forEach(item => item.addEventListener('click', makeGreenBox))

function makeGreenBox(){
  const j = Math.floor(Math.random() * [...gameBoxes].length)
  gameBoxes[j].style.backgroundColor = "green"
}
function createNewGameBoard(){
  gameBoxes.forEach(item => item.style.backgroundColor = "white")
  makeGreenBox()
}
setInterval(createNewGameBoard, 2000);

//makeGreenBox()