function setup() {
    var red = "#FF0000"
    var startX = 30
    var time = 100
    

    createCanvas(800,800);
    noStroke();

    background(red);

    fill(255,0,0)
    rect(299,299,201,201);

    fill(0,255,0);
    circle(400,400,sin(frameCount)*100);

    stroke(2);
    line(0,500,200,20);

    time = time + 1;
}
