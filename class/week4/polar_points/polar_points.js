function setup(){
    createCanvas(800,800)
    background('blue')
}
function draw(){
    let res = polarPoint(300);
    console.log(res);
    translate(100,100);
    circle(res.x, res.y, 10);
}

function polarPoint(r){
    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseY);
    return createVector(x,y)
}