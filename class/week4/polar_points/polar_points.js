function polarPoint(r){
    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseX);
    return createVector(x,y);
}
function setup(){
    createCanvas(800,800)
    background('blue')
}
function draw(){
    let res = polarPoint(400);
    console.log(res);
    translate(400,400);
    circle(res.x, res.y, 10);
}

