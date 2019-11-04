const canvas = createElementWithClassname('canvas', 'canvas');
const body = document.querySelector("body");
body.append(canvas);
const ctx = canvas.getContext("2d");


function createElementWithClassname(elementTag, elementClassName){
    const element = document.createElement(elementTag)
    element.className = elementClassName
    return element
}