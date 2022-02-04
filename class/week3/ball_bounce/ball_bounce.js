function setup() {
    createCanvas(window.innerWidth,window.innerHeight - 4)
}
let x = 400
let y = 300
let xchange = -5
let ychange = 5
function draw() {
    background('gray')
    fill('blue')
    circle(x,y,10)
    x += xchange
    y += ychange
    if (x >= (window.innerWidth - 10) || x <= 10){
        xchange *= -1
    }
    if (y >= (window.innerHeight - 14) || y <= 10){
        ychange *= -1
    }
}