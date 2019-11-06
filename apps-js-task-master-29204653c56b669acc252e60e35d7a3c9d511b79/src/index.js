const canvas = createElementWithClassname('canvas', 'canvas');
const body = document.querySelector("body");
body.append(canvas);
const ctx = canvas.getContext("2d");
function drawRect (x, y, width, height, color = 'green') {
    ctx.fillStyle = color
    ctx.fillRect(x, y, width, height)
    ctx.strokeStyle = 'black';
  }
drawRect(0, 0, 30, 30)
drawRect(60, 60, 15, 15)


function createElementWithClassname(elementTag, elementClassName){
    const element = document.createElement(elementTag)
    element.className = elementClassName
    return element
}