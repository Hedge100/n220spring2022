//creates an object called box
let box = {width:80, height:150, color:"blue", x:400, y:550}

function setup(){
    createCanvas(windowWidth,windowHeight-10)
    background(100)
}

function draw(){
//    fill(box.color)
//    rect(box.x,box.y,box.width,box.height)
    drawBox(box)
}
//takes an object argument and draws a rectangle to the screen
function drawBox(obj){
    fill(obj.color)
    rect(obj.x,obj.y,obj.width,obj.height)
}
