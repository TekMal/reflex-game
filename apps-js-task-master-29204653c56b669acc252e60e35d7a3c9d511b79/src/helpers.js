function tempAlert(msg, duration){
    const alertElement = createElementWithClassname('div', 'liveAlert')
    alertElement.innerHTML = msg
    setTimeout(function(){
        alertElement.parentNode.removeChild(alertElement);
        },duration);
    document.body.appendChild(alertElement);
}
function createElementWithClassname(elementTag, elementClassName){
    const element = document.createElement(elementTag)
    element.className = elementClassName
    return element
}

export {tempAlert, createElementWithClassname}