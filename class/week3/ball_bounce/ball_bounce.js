function setup() {
    createCanvas(800,600)
}
let x = 400
let y = 300
let xchange = -5
let ychange = 5
function draw() {
    background('white')
    fill('blue')
    circle(x,y,10)
    x += xchange
    y += ychange
    if (x >= 790 || x <= 10){
        xchange *= -1
    }
    if (y >= 590 || y <= 10){
        ychange *= -1
    }
}