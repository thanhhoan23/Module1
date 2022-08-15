function upArrowPressed() {
    let element = document.getElementById('myImg');
    element.style.top= parseInt(element.style.top) - 5 + 'px';
}
function downArrowPressed() {
    var element = document.getElementById('myImg');
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function rightArrowPressed() {
    var element = document.getElementById('myImg');
    element.style.left = parseInt(element.stle.left) - 5 + 'px';
}
function leftArrowPressed() {
    var element = document.getElementById('myImg');
    element.style.left = parseInt(element.style.left) + 5 + 'px'
}
function moveSelection(evt) {
    switch (evt.keyCode){
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
    }
    }
    function docReady() {
            window.addEventListener('keydown', moveSelection);
    }
