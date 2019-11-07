const canvas = createElementWithClassname('canvas', 'canvas');
const body = document.querySelector("body");
canvas.setAttribute('width', '900px')
canvas.setAttribute('height', '500px')
body.append(canvas);
const ctx = canvas.getContext("2d");
function drawRect (x, y, width, height, color = 'green') {
    ctx.fillStyle = color
    ctx.fillRect(x, y, width, height)
    ctx.strokeStyle = "black"
  }

ctx.beginPath();
ctx.lineWidth = "1";
ctx.strokeStyle = "black";
ctx.fillStyle = "green"
ctx.fillRect(30, 30, 50, 50);
ctx.strokeRect(30, 30, 50, 50)

function createElementWithClassname(elementTag, elementClassName){
    const element = document.createElement(elementTag)
    element.className = elementClassName
    return element
}