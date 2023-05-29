//your JS code here. If required.

const screenSize =  document.getElementById("sizeInfo");
screenSize.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
document.body.append(screenSize);




window.onresize = function(){
    screenSize.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}