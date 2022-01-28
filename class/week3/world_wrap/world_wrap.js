function setup() {
    createCanvas(800,600)
}
let x = 0
function draw() {
    background(255,255,255)
    fill('blue')
    circle(x,300,10)
    if(x>= 800){
        x-=800
    } else {
        x+=5
    }
}