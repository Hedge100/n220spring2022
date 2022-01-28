let diameter = 1
function setup() {
    createCanvas(200,200)
}

function draw() {
    background('white')
    fill('red')
    circle(100,100,diameter)
    if (diameter >= 100) {
        diameter = 1
    }else {
        diameter+=1
    }
}