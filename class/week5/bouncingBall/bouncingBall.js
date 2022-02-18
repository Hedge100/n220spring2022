function setup() {
    createCanvas(window.innerWidth,window.innerHeight - 4)
}
//creates ball object
let ball = {
    x:400,
    y:300,
    xChange:-5,
    yChange:5,
    size:10,
    color:"blue"
}
//creates a ball that bounces around the screen
function draw() {
    background('gray')
    fill(ball.color)
    circle(ball.x,ball.y,ball.size)
    ball.x += ball.xChange
    ball.y += ball.yChange
    if (ball.x >= (window.innerWidth - 10) || ball.x <= 10){
        ball.xChange *= -1
    }
    if (ball.y >= (window.innerHeight - 14) || ball.y <= 10){
        ball.yChange *= -1
    }
}